import Questions from "../models/questionSchema.js";
import Subjects from "../models/subjectSchema.js";
import Results from "../models/resultSchema.js";
import User from "../models/userSchema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


/** Register a new user */
export async function registerNewUser(req, res) {
    try {
        const { username, email, password } = req.body;

        // Überprüfen, ob der Benutzer bereits existiert
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Benutzer existiert bereits." });
        }

        // Das Passwort hashen
        const hashedPassword = await bcrypt.hash(password, 8);

        // Erstelle ein neues User-Objekt und speichere es in der Datenbank
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "Benutzer erfolgreich registriert!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** get all users */
export async function getUser(req, res){
    try {
        const r = await User.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** Login a user */
export async function loginUser(req, res) {
    console.log('Login Request:', req.body); 
        
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            console.log('Fehlende Anmeldedaten:', req.body); // Vor der möglichen Fehlerquelle
            return res.status(400).json({ message: "Fehlende Anmeldedaten." });
        }

        // Finde den Benutzer anhand der E-Mail
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Benutzer nicht gefunden:', email);
            return res.status(404).json({ message: "Benutzer nicht gefunden." });
        }

        // Überprüfe das Passwort
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log('Ungültiges Passwort:', password);
            return res.status(400).json({ message: "Ungültiges Passwort." });
        }

        // Generiere ein Token für den Benutzer (verwende hier zum Beispiel JWT)
        const token = generateToken(user);
        console.log('Token generiert für:', user);
        // Sende den Token und ggf. Benutzerinformationen zurück
        res.status(200).json({
            message: "Erfolgreich angemeldet!",
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (error) {
        console.error('Login Fehler:', error);
        res.status(500).json({ error: error.message });
    }
}

function generateToken(user) {
    // Ersetze 'mysecret' mit einem richtigen geheimen Schlüssel und konfiguriere die Optionen nach Bedarf
    return jwt.sign({ id: user._id }, 'mysecret', { expiresIn: '1h' });
}

/** get all subjects */
export async function getSubjects(req, res){
    try {
        const q = await Subjects.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all Subjects */
export async function insertSubjects(req, res){
    try {
        Questions.insertMany({ subjectname, subjectnr}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Subjects */
export async function dropSubjects(req, res){
    try {
         await Subjects.deleteMany();
         res.json({ msg: "Questions Deleted Successfully...!"});
    } catch (error) {
         res.json({ error })
    }
 }

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questions */
export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions, answers }, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}


export async function storeResult(req, res) {
    try {
        const { username, answers } = req.body;

        if (!username || !answers) {
            throw new Error('Benutzername und Antworten müssen bereitgestellt werden.');
        }

        let points = 0; // Anfangspunktzahl
        const results = []; // Hier speichern wir die Ergebnisse jeder Frage
        const passingScore = 5; // Legen Sie fest, wie viele Punkte zum Bestehen benötigt werden

        // Überprüfen Sie jede Antwort
        for (const answer of answers) {
            const question = await Questions.findById(answer.questionId);
            if (!question) {
                results.push({ questionId: answer.questionId, correct: false });
                continue; // Gehe zur nächsten Frage, wenn die Frage nicht gefunden wurde
            }
            const correct = question.answer === answer.selectedOption;
            if (correct) points++; // Punktzahl erhöhen, wenn die Antwort korrekt ist
            results.push({ questionId: answer.questionId, selectedOption: answer.selectedOption, correct });
        }
    

        // Überprüfen, ob die erreichten Punkte zum Bestehen ausreichen
        const achived = points >= passingScore ? "Passed" : "Failed";

        // Ergebnis für den Benutzer speichern
        const newResult = await Results.create({
            username,
            points, // Die errechnete Punktzahl
            achived // 'Passed' oder 'Failed' basierend auf den erreichten Punkten
        });

        res.status(201).json({ message: "Ergebnisse erfolgreich gespeichert!", result: newResult });
    } catch (error) {
        console.error('Fehler beim Speichern des Ergebnisses:', error);
        res.status(500).json({ error: error.message });
    }
}


/** delete all result*/
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

/** Get leaderboard */
export async function getLeaderboard(req, res) {
    try {
      // Hier holen Sie die Daten aus der Datenbank und sortieren sie nach Punkten
      const leaderboard = await User.find({}, 'username points -_id').sort({ points: -1 });
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  