import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserGuide() {
    const navigate = useNavigate();

    const Login = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="container">
      <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="/MicrosoftTeams-image.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
      </ul>
      <ul>
        <li><button onClick={Login}>Anmelden</button></li>
      </ul>
    </nav>
        </div>
             <div className="container">
            <h3>Benutzerhandbuch für die Quiz-App</h3>
        
            <section>
                <h4>1. Anmelden:</h4>
                <p>
                Um auf den QuizApp_Prototypen zugreifen zu können, musst du dich einloggen. Verwende dazu die folgenden Test-Anmeldedaten:
                <br/>
                E-Mail: <strong>iu.tester@iu.org </strong>
                <br/>
                Passwort: <strong>test123 </strong> 
                <br/>
                Nach erfolgreicher Anmeldung hast du Zugriff auf die Quiz-Funktionen.
                </p>
            </section>
            <section>
                <h4>2. Quiz vorbereiten:</h4>
                <p>
                    Bevor du mit dem Quiz beginnst, empfehlen wir dir, die Quiz-Regeln zu lesen. 
                    Die Quiz-Regeln erklären dir, wie das Quiz funktioniert und welche Regeln zu beachten sind. 
                    Wähle dann das gewünschte Modul oder Thema aus, um deine Wissensgebiete festzulegen.
                </p>
            </section>
            <section>
                <h4>3. Quiz starten:</h4>
                <p>
                    Klicke auf "Quiz starten", um das Quiz zu beginnen.
                    Das Quiz besteht aus 10 Fragen, die du beantworten musst.
                    Stelle sicher, dass du bereit bist, bevor du das Quiz startest, da es keine Unterbrechung gibt, sobald das Quiz gestartet wurde.
                </p>
            </section>
            <section>
                <h4>4. Quiz-Ergebnisse:</h4>
                <p>
                    Nachdem du alle Fragen beantwortet hast, werden deine Quiz-Ergebnisse zusammengefasst und angezeigt.
                    Du erhältst Informationen darüber, wie viele Fragen du richtig beantwortet hast und welche Punktzahl du erzielt hast
                    Du hast auch die Möglichkeit, das Quiz erneut zu starten, falls du weitere Übung benötigst.
                </p>
            </section>
            <section>
                <h4>5. Leaderboard:</h4>
                <p>
                    Auf der Leaderboard-Seite kannst du deine Ergebnisse mit denen anderer Studenten vergleichen.
                    Das Leaderboard zeigt die besten Quiz-Ergebnisse an und ermöglicht es dir, deine Leistung im Vergleich zu anderen zu sehen
                </p>
            </section>
            <section>
                <p>Viel Erfolg!</p>
            </section>

        </div>
        </div>
    );
}

export default UserGuide;