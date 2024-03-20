import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /@(iu-study\.org|iu\.org|iubh-fernstudium\.de)$/;

    // Überprüfe die Eingaben
    if (!username || !email || !password || !confirmPassword) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Bitte verwenden Sie eine E-Mail-Adresse mit einer gültigen Domain.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Die Passwörter stimmen nicht überein.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password, // Achte darauf, dass dein Backend HTTPS unterstützt, um Klartext-Passwörter sicher zu übertragen.
        }),
      });

      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok.');
      }

      const data = await response.json();
      console.log('Registrierungsantwort:', data);
      alert('Registrierung erfolgreich!');
      navigate('/login'); // Gehe zur Login-Seite, nachdem die Registrierung erfolgreich war.
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      alert('Registrierung fehlgeschlagen: ' + (error.message || 'Unbekannter Fehler'));
    }
  };

  const navigateToLogin = () => {
    navigate('/'); // Pfad zur Login-Seite
  };

  return (
    <div className="login-container">
      <div className="content-box">
        <div className="image-side">
          <img src="/img2.svg" alt="Beschreibung" />
        </div>
        <div className="text-side">
          <h2>Registriere dich!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Benutzername</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Benutzername"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail-Adresse</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail-Adresse"
                required
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Passwort bestätigen</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Passwort bestätigen"
                required
              />
            </div>
            <button type="submit">Registrieren</button>
          </form>
          <p>Du hast schon einen Account? Hier anmelden</p>
          <button onClick={navigateToLogin}>Anmelden</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
