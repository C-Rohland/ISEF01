import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../database/Users';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Sortiere die Benutzerdaten nach ihrer Punktzahl
    const sortedUsers = [...users].sort((a, b) => b.points - a.points);
    setLeaderboardData(sortedUsers);
  }, []);

  const startQuiz = () => {
    navigate('/quiz');
  };

  const navigateToMain = () => {
    navigate('/main');
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
        <li><img src="/MicrosoftTeams-image.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
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
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='container'>
          <button onClick={startQuiz}>Neues Quiz starten</button>
          <button onClick={navigateToMain} class="secondary">Zurück zur Startseite</button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;