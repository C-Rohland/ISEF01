import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../database/Users';
import useAuth from '../hooks/useAuth';

//Leaderboard-Komponente
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const navigate = useNavigate();
  useAuth();

  // useEffect-Hook, der beim Mounten der Komponente ausgeführt wird, um die Leaderboard-Daten zu initialisieren
  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
    const combinedResults = storedResults.concat(users.map(user => ({
      username: user.username,
      score: user.points
    })));
    
    // Sortiere die kombinierten Ergebnisse nach der Punktzahl
     // Gruppiere Ergebnisse nach Benutzernamen und behalte das beste Ergebnis jedes Benutzers
  const bestResultsPerUser = combinedResults.reduce((acc, current) => {
    // Wenn der Benutzer noch nicht im Akkumulator ist oder wenn die aktuelle Punktzahl höher ist, aktualisiere den Eintrag
    if (!acc[current.username] || acc[current.username].score < current.score) {
      acc[current.username] = current;
    }
    return acc;
  }, {});

  // Konvertiere das Ergebnis-Objekt zurück in ein Array
  const bestResultsArray = Object.values(bestResultsPerUser);

  // Sortiere die finale Liste nach der Punktzahl
  const sortedBestResults = bestResultsArray.sort((a, b) => b.score - a.score);
  
  setLeaderboardData(sortedBestResults); // Aktualisiere den State mit den sortierten Ergebnissen
}, []);

  const startQuiz = () => {
    navigate('/quiz');
  };

  const navigateToMain = () => {
    navigate('/main');
  };
  const backToResult = () => {
    navigate('/result');
  };
  const logout = () => {
    sessionStorage.clear(); // Löscht alle gespeicherten Daten im sessionStorage
    navigate('/'); // Navigiere zurück zur Anmeldeseite, passe den Pfad entsprechend an
  };

  return (
    <div className='container'>
      <div className="container">
      <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="/Logo.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
      </ul>
      <ul>
        <li><button onClick={logout}>Abmelden</button></li>
      </ul>
    </nav>
        </div>
      <h1>Leaderboard</h1>
      <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Platz</th>
              <th>User</th>
              <th>Punktzahl</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='container'>
        <button onClick={backToResult}>Zurück zum Ergebnis</button>
          <button onClick={startQuiz} class="secondary">Neues Quiz starten</button>
          
          <button onClick={navigateToMain} class="contrast">Zurück zur Startseite</button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;