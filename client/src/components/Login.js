import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // Zustände für Benutzername und Passwort
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Funktion, die beim Einreichen des Formulars ausgelöst wird
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite beim Einreichen

    // Einfache Validierung
    if (!username || !password) {
      alert('Bitte füllen Sie beide Felder aus.');
      return;
    }

    try {
      // Ersetze 'http://localhost:5000/api/login' mit der URL deines eigenen Servers
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login fehlgeschlagen');
      }

      const data = await response.json();
      console.log('Login erfolgreich:', data);

      // Speichere Token, falls eines vom Server zurückgegeben wurde
      // Beispiel: localStorage.setItem('token', data.token);

      navigate('/main'); // Ändere '/main' zu dem Pfad, der deiner Hauptkomponente entspricht
    } catch (error) {
      console.error(error);
      alert('Anmeldung fehlgeschlagen: ' + error.message);
    }
  };

  const navigateToRegister = () => {
    navigate('/register'); // Pfad zur Registrierungsseite
  };

  return (
    <div className="login-container">
      <div className="content-box">
        <div className="image-side">
        <img src="/img2.svg" alt="Beschreibung" />
        </div>
        <div className="text-side">
          <h2>Willkommen</h2>
          <p>Bitte logge dich mit der IU-Mailadresse ein, um fortzufahren.</p>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">Benutzername</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Benutzername"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Passwort</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passwort"
              />
            </div>
        <button type="submit">Anmelden</button>
        <div>
            <p>Du hast noch keinen Account? Dann registriere dich</p>
            <button onClick={navigateToRegister}>Registrieren</button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
}
  

export default Login;
