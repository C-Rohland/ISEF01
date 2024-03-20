import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // Zustände für Benutzername und Passwort
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Funktion, die beim Einreichen des Formulars ausgelöst wird
  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite beim Einreichen

    // Einfache Validierung
    if (!username || !password) {
      alert('Bitte füllen Sie beide Felder aus.');
      return;
    }

    // Hier könnte die Logik zur Überprüfung der Anmeldedaten stehen
    console.log('Login-Versuch mit:', username, password);

    // Weiterleitung, Zustandsaktualisierung oder ähnliches nach erfolgreicher Anmeldung
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
