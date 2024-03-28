
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const postServerData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    return response.json();
  }

export function usePublishResult(resultData) {
  const dispatch = useDispatch();

  useEffect(() => {
    postServerData('/api/result', resultData).then(response => {
      // Handle response
    }).catch(error => {
      console.error("Fehler beim Veröffentlichen des Ergebnisses:", error);
    });
  }, [resultData, dispatch]); // Abhängigkeiten des Hooks
}