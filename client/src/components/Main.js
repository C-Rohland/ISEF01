import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css'


export default function Main() {

    const navigate = useNavigate();
    const username = sessionStorage.getItem('username');



    const startQuiz = () => {
        navigate('/quiz'); 
        }
    const createQuiz = () => {
        navigate('/createQuiz'); 
        }
    const seeLeaderboard = () => {
        navigate('/leaderboard'); 
        }
        const logout = () => {
            sessionStorage.clear(); // Löscht alle gespeicherten Daten im sessionStorage
            navigate('/'); // Navigiere zurück zur Anmeldeseite, passe den Pfad entsprechend an
          };
          
    

  return (
    <div>
      <div className="container">
      <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="/MicrosoftTeams-image.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
      </ul>
      <ul>
        <li><button onClick={logout}>Abmelden</button></li>
      </ul>
    </nav>
        </div>
  
    <div className="container">
            {username && <h1>Hallo {username}</h1>}
            
            <h2>Quiz-Regeln</h2>
            <ul>
                <li>Das Quiz besteht aus 10 Fragen.</li>
                <li>Jede Frage hat 4 Antwortmöglichkeiten, wovon nur eine richtig ist.</li>
                <li>Für jede richtige Antwort erhältst du Punkte. Die Punkte werden am Ende addiert.</li>
                <li>Es gibt kein Zeitlimit für die Beantwortung der Fragen, aber versuche zügig zu antworten.</li>
                <li>Am Ende des Quiz kannst du deine Gesamtpunktzahl sehen und dich mit anderen vergleichen.</li>
            </ul>
             <p>Viel Erfolg!</p>
     </div>

     <div className="container">
      <button onClick={startQuiz}>Quiz starten</button>
      <button onClick={seeLeaderboard} class="secondary">Leaderboard</button>
      <button onClick={createQuiz} class="contrast">Quiz erstellen</button>
    </div>     
            
</div>
            
  );

}