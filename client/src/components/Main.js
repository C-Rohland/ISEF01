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
        <div className='logout-wrapper'>
      <button onClick={logout}>Abmelden</button>
    </div>
    <div className='container'>
            {username && <h1 className='title text-light'>Hallo {username}</h1>}
            
            <h2>Quiz-Regeln</h2>
            <ul>
                <p>Das Quiz besteht aus 10 Fragen.</p>
                <p>Jede Frage hat 4 Antwortmöglichkeiten, wovon nur eine richtig ist.</p>
                <p>Für jede richtige Antwort erhältst du Punkte. Die Punkte werden am Ende addiert.</p>
                <p>Es gibt kein Zeitlimit für die Beantwortung der Fragen, aber versuche zügig zu antworten.</p>
                <p>Am Ende des Quiz kannst du deine Gesamtpunktzahl sehen und dich mit anderen vergleichen.</p>
            </ul>
             <p>Viel Erfolg!</p>
     </div>

          
     <div className='start'>
            <button onClick={startQuiz}>Neues Quiz starten</button>
          
                
        

            <button onClick={seeLeaderboard}>Leaderboard</button>
          
            <button onClick={createQuiz}>Quiz erstellen</button>
            </div>
            
</div>
            
  );

}