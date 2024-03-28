import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem('username');

    // Wenn kein Benutzername gespeichert ist, navigiere zur Login-Seite
    if (!username) {
      navigate('/'); 
    }
  }, [navigate]);
}

export default useAuth;
