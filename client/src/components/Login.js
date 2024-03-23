// Importiert die benötigten Module und Komponenten
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from "react-icons/hi";
import users from './Users';


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
    console.log(typeof users);
    console.log(users);

    // Überprüfe, ob users tatsächlich ein Array ist
    if (!Array.isArray(users)) {
      alert('Fehler beim Laden der Benutzerdaten.');
      return;
    }

    // Versuche, den Benutzer zu finden
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      sessionStorage.setItem('username', user.username);
      console.log(sessionStorage.getItem('username'));
      navigate('/main');
    } else {
      alert('Anmeldung fehlgeschlagen: Ungültige E-Mail oder Passwort.');
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
