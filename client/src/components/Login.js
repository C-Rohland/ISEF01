// Importiert die benötigten Module und Komponenten
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from "react-icons/hi";


function Login() {

  // Definiert Zustandsvariablen für die E-Mail, das Passwort und die Sichtbarkeit des Passworts
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Nutzt den useNavigate Hook, um programmatische Navigation zu ermöglichen
  const navigate = useNavigate();

  // Funktion zum Umschalten der Sichtbarkeit des Passworts
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Funktion, die beim Einreichen des Formulars ausgelöst wird
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite beim Einreichen

   // Einfache Validierung, um sicherzustellen, dass die Felder ausgefüllt sind
    if (!email || !password) {
      alert('Bitte füllen Sie beide Felder aus.');
      return;
    }

    // Versucht, den Login mit der API durchzuführen
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

      // Verarbeitet die Antwort
      const data = await response.json();
      console.log('Login erfolgreich:', data);
      alert('Login erfolgreich!');

       // Navigiert zur Hauptseite
      navigate('/main'); 
    } catch (error) {
      console.error(error);
      alert('Anmeldung fehlgeschlagen: ' + error.message);
    }
  };

  //Navigiert zur Registrierungsseite
  const navigateToRegister = () => {
    navigate('/register'); 
  };

  //Login-Formular
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
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passwort"
                    required
                  />
                  <span onClick={toggleShowPassword} className="password-icon">
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>
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
