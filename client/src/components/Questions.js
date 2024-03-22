import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]); 
  const [checked, setChecked] = useState(undefined);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`);
      if (!response.ok) {
        throw new Error('Fehler beim Laden der Fragen: ' + response.statusText);
      }
      const data = await response.json();
      const shuffledData = shuffleArray(data); // Mischen Sie die Daten
        const randomTenQuestions = shuffledData.slice(0, 10); // Auswahl der ersten 10 Fragen nach dem Mischen
        setQuestions(randomTenQuestions);
      } catch (error) {
        console.error("Fehler beim Laden der Fragen:", error);
      }
    };
    
    fetchData();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const loadNextQuestion = () => {
    setCurrentIndex((prevIndex) => {
      // Gehe zur nächsten Frage oder bleibe bei der letzten, wenn am Ende
      return prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const handleOptionChange = (index) => {
    setChecked(index); // Aktualisieren der ausgewählten Antwort
  };

  const handleNext = () => {
    // Überprüfen, ob eine Antwort ausgewählt wurde
    if (checked !== null) {
      // Hier können Sie die ausgewählte Antwort mit der richtigen Antwort vergleichen
      // Zum Beispiel: if (checked === questions[currentIndex].correctIndex) { ... }
      
      // Zur nächsten Frage wechseln
      loadNextQuestion();
    } else {
      alert("Bitte wählen Sie eine Antwort aus.");
    }
  };
  function showResult(){
    navigate('/result', { replace: true });
}

  // Anzeige, während die Frage geladen wird
  if (questions.length === 0) return <div>Lädt...</div>;

  const questionData = questions[currentIndex]; // Aktuelle Frage basierend auf dem Index

  return (
    <div>
      <h2>{questionData.question}</h2>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index}>
            <input 
              type="radio"
              value={option} 
              name="options"
              id={`q${index}-option`}
              checked={checked === index} 
              onChange={() => handleOptionChange(index)} 
            />
            <label htmlFor={`q${index}-option`}>{option}</label>
          </li>
        ))}
      </ul>
      {currentIndex < questions.length - 1 && (
        <button onClick={handleNext}>Nächste Frage</button> 
      )}
      {/* Zeige den Link zu den Ergebnissen für die letzte Frage an */}
      {currentIndex === questions.length - 1 && (
        <button onClick={showResult}>Zeige das Ergebnis</button> 
      )}
    </div>
  );
};

export default QuestionComponent;