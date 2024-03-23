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

  return (
    <div className='container'>
      <h1 className='title text-light'>Leaderboard</h1>
      <div className='result flex-center'>
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
        <div className='start'>
          <button onClick={startQuiz}>Neues Quiz starten</button>
          <button onClick={navigateToMain}>Zurück zur Startseite</button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
