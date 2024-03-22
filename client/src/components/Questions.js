import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setCorrectAnswersCountAction } from '../redux/result_reducer';

const QuestionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]); 
  const [checked, setChecked] = useState(undefined);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const navigate = useNavigate();
  const { correctAnswersCount } = useSelector(state => state.result);
  const dispatch = useDispatch();


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
    if (checked !== null) {
      const selectedOptionText = questions[currentIndex].options[checked]; // Text der gewählten Antwort
      const isCorrect = selectedOptionText === questions[currentIndex].answer; 
  
      if (isCorrect) {
        // Erhöhe die Anzahl der korrekten Antworten im lokalen und globalen Zustand
        setCorrectAnswers((prev) => {
          const newCount = prev + 1;
          dispatch(setCorrectAnswersCountAction(newCount)); // Aktualisiere den Redux Store
          return newCount;
        });
        setAnswerFeedback("Richtig!");
      } else {
        setAnswerFeedback("Falsch!");
      }
  
      setTimeout(() => {
        loadNextQuestion();
        setChecked(undefined); // Zurücksetzen des ausgewählten Index
        setAnswerFeedback(null); // Feedback zurücksetzen
      }, 1000); // 1 Sekunde Verzögerung
    } else {
      alert("Bitte wählen Sie eine Antwort aus.");
    }
  };
  

  // const saveResults = async () => {
  //   try {
  //     const response = await fetch('/api/result', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username, 
  //         answers,
  //       }),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Netzwerkantwort war nicht ok.');
  //     }
  
  //     const data = await response.json();
  //     console.log("Ergebnis gespeichert:", data);
  //   } catch (error) {
  //     console.error("Fehler beim Speichern des Ergebnisses:", error);
  //   }
  // };
  
  const saveResults = async () => {
    try {
      // Hole den Benutzernamen aus dem sessionStorage
      const username = sessionStorage.getItem('username');
  
      // Hole die Anzahl der korrekten Antworten aus dem Zustand der Komponente
      const points = correctAnswers; // Verwende den Zustand `correctAnswers` für die Punktzahl
  
      // Stelle sicher, dass `username` und `points` verfügbar sind
      if (!username) {
        throw new Error("Benutzername ist nicht definiert.");
      }
  
      // Sende die Punktzahl und den Benutzernamen zum Server
      const response = await fetch('/api/result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          points,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok.');
      }
  
      const data = await response.json();
      console.log("Ergebnis gespeichert:", data);
  
      // Nach erfolgreichem Speichern navigiere zum Ergebnisbildschirm
      navigate('/result', { replace: true });
    } catch (error) {
      console.error("Fehler beim Speichern des Ergebnisses:", error);
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
      {answerFeedback && (
        <div>{answerFeedback}</div>
      )}
      {/* Zeige den Link zu den Ergebnissen für die letzte Frage an */}
      {currentIndex === questions.length - 1 && (
        <button onClick={showResult}>Zeige das Ergebnis</button> 
      )}
    </div>
  );
};

export default QuestionComponent;