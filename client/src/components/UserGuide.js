import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserGuide() {
    const navigate = useNavigate();

    const Login = () => {
        navigate('/');
    };

    return (
        <div className="content-box with-border">
             <div className="login-container">
            <h1>Benutzerhandbuch für die Quiz-App</h1>
            <section>
                <h2>1. Registrieren:</h2>
                <p>
                    Um die Quiz-App nutzen zu können, müssen Sie sich zuerst registrieren.
                    Bitte beachten Sie, dass nur Email-Adressen von IU (iu-study.org, @iu.org, @iubh-fernstudium.de) akzeptiert werden.
                    Geben Sie Ihre gültige Email-Adresse ein und klicken Sie auf "Registrieren".
                    Dadurch erhalten Sie Zugang zur Anmeldung und zur Teilnahme an Quiz-Sitzungen.
                </p>
            </section>
            <section>
                <h2>2. Anmelden:</h2>
                <p>
                    Nach erfolgreicher Registrierung können Sie sich anmelden, um auf Ihr Konto zuzugreifen.
                    Geben Sie dazu die Email-Adresse ein, mit der Sie sich registriert haben, und klicken Sie auf "Anmelden".
                    Dies ermöglicht Ihnen den Zugriff auf die Quiz-Funktionen und Ihr persönliches Profil.
                </p>
            </section>
            <section>
                <h2>3. Quiz vorbereiten:</h2>
                <p>
                    Bevor Sie mit dem Quiz beginnen, sollten Sie die Quiz-Regeln lesen und ein Modul oder Thema auswählen, an dem Sie interessiert sind.
                    Die Quiz-Regeln erklären Ihnen, wie das Quiz funktioniert und welche Regeln zu beachten sind.
                    Wählen Sie dann das gewünschte Modul oder Thema aus, um Ihre Wissensgebiete festzulegen.
                </p>
            </section>
            <section>
                <h2>4. Quiz starten:</h2>
                <p>
                    Klicken Sie auf "Quiz starten", um das Quiz zu beginnen.
                    Das Quiz besteht aus 10 Fragen, die Sie beantworten müssen.
                    Stellen Sie sicher, dass Sie bereit sind, bevor Sie das Quiz starten, da es keine Unterbrechung gibt, sobald das Quiz gestartet wurde.
                </p>
            </section>
            <section>
                <h2>5. Quiz-Ergebnisse:</h2>
                <p>
                    Nachdem Sie alle Fragen beantwortet haben, werden Ihre Quiz-Ergebnisse zusammengefasst und angezeigt.
                    Sie erhalten Informationen darüber, wie viele Fragen Sie richtig beantwortet haben und welche Punktzahl Sie erzielt haben.
                    Sie haben auch die Möglichkeit, das Quiz erneut zu starten, falls Sie weitere Übung benötigen.
                </p>
            </section>
            <section>
                <h2>6. Leaderboard:</h2>
                <p>
                    Auf der Leaderboard-Seite können Sie Ihre Ergebnisse mit denen anderer Studenten vergleichen.
                    Das Leaderboard zeigt die besten Quiz-Ergebnisse an und ermöglicht es Ihnen, Ihre Leistung im Vergleich zu anderen zu sehen.
                </p>
            </section>
            <section>
                <p>Viel Erfolg!</p>
            </section>

            <div className='login'>
                <button onClick={Login}>Einloggen</button>
            </div>
        </div>
        </div>
    );
}

export default UserGuide;