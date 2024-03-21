import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  // Zustände für Benutzername und Passwort
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Funktion, die beim Einreichen des Formulars ausgelöst wird
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite beim Einreichen

    // Einfache Validierung
    if (!email || !password) {
      alert('Bitte füllen Sie beide Felder aus.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login fehlgeschlagen');
      }

      const data = await response.json();
      console.log('Login erfolgreich:', data);
      alert('Login erfolgreich!');
// Hier könntest du den Token speichern
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
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
