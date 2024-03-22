import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'
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



/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
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

/** post all result */
export async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Results.create({ username, result, attempts, points, achived }), 
            res.json({ msg : "Result Saved Successfully...!"})
   } catch (error) {
        res.json({error})
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