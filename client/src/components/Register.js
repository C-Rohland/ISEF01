import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  HiEye, HiEyeOff} from "react-icons/hi";

function Register() {
  // Zustandsvariablen für Formulardaten und UI-Steuerung
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Funktionen zum Umschalten der Passwortsichtbarkeit
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  // Funktion zur Handhabung des Registrierungsversuchs
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /@(iu-study\.org|iu\.org|iubh-fernstudium\.de)$/;// nur IU Emailadressen erlauben

    // Validierung der Eingaben
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

    // Versucht, die Registrierung über die API durchzuführen
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password, 
        }),
      });

      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok.');
      }

      // Versucht, die Registrierung über die API durchzuführen
      const data = await response.json();
      console.log('Registrierungsantwort:', data);
      navigate('/'); // Leitet den Benutzer zur Login-Seite weiter
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      alert('Registrierung fehlgeschlagen: ' + (error.message || 'Unbekannter Fehler'));
    }
  };

  // Ermöglicht die Navigation zur Login-Seite
  const navigateToLogin = () => {
    navigate('/'); 
  };

  //  Registrierungsformular
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
              <div className="input-group">
              <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
              required
            />
            <span onClick={toggleShowPassword} className="icon">
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
        </div>
             


        <div className="form-group">
          <label htmlFor="confirmPassword">Passwort bestätigen</label>
          <div className="input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Passwort bestätigen"
              required
            />
            <span onClick={toggleShowConfirmPassword} className="icon">
              {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
            </span>
          </div>
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
