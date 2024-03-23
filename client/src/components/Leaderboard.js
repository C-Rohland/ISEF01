import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

    const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeaderboardData = async () => {
          try {
            const response = await fetch('/api/updatePoints');
            const data = await response.json();
            setLeaderboardData(data);
          } catch (error) {
            console.error('Fehler beim Laden des Leaderboards:', error);
          }
        };
    
        fetchLeaderboardData();
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
                <td>{index + 1}</td> {/* Platz dynamisch basierend auf dem Index berechnen */}
                <td>{user.username}</td> {/* Stellen Sie sicher, dass die Feldnamen mit Ihrer DB übereinstimmen */}
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
}

export default Leaderboard;
