import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Stelle sicher, dass dieser Hook importiert wird
import dataQuestions from '../database/dataQuestions';
import { useDispatch } from 'react-redux';
import { setCorrectAnswersCountAction } from '../redux/result_reducer'; // Stelle sicher, dass der Pfad korrekt ist

// Die Quiz-Komponente
const Quiz = () => {
   // State-Hooks zur Verwaltung verschiedener Aspekte des Quiz
  const [category, setCategory] = useState('');  // Hält die gewählte Kategorie
  const [questions, setQuestions] = useState([]);  // Hält die Fragen der gewählten Kategorie
  const [currentIndex, setCurrentIndex] = useState(0); // Index der aktuellen Frage
  const [checked, setChecked] = useState(undefined);
  const [correctAnswers, setCorrectAnswers] = useState(0); // Anzahl der korrekten Antworten
  const [answerFeedback, setAnswerFeedback] = useState(null); // Feedback für die ausgewählte Antwort
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate Hook richtig initialisieren

  useEffect(() => {
    if (category) {
      // Filtern der Fragen basierend auf der gewählten Kategorie
      const filteredQuestions = dataQuestions.filter(question => question.subjectname === category);
      setQuestions(filteredQuestions);
      setCurrentIndex(0);  // Zurücksetzen des Frage-Indexes bei Kategoriewechsel
      setCorrectAnswers(0);// Zurücksetzen der korrekten Antworten bei Kategoriewechsel
    }
  }, [category]);

  const handleOptionChange = (index) => {
    setChecked(index);
  };

  const handleNext = () => {
    if (checked !== undefined) {
      const selectedOptionText = questions[currentIndex].options[checked];
      const isCorrect = selectedOptionText === questions[currentIndex].answer;
      
       // Logik zur Aktualisierung des State basierend auf der Korrektheit der Antwort
      if (isCorrect) {
        setCorrectAnswers(prevCount => prevCount + 1);
        setAnswerFeedback("Richtig!");
      } else {
        setAnswerFeedback("Falsch!");
        // Finde den Index der richtigen Antwort und speichere ihn
        const correctIndex = questions[currentIndex].options.findIndex(
          option => option === questions[currentIndex].answer
        );
        setCorrectOptionIndex(correctIndex);
      }
      
      // Timeout, um die nächste Frage zu laden oder zum Ergebnis zu navigieren
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          navigateToResult();
        }
        setChecked(undefined);
        setAnswerFeedback(null);
        setCorrectOptionIndex(null); // Reset für die nächste Frage
      }, 1000);
    } else {
      alert("Bitte wählen Sie eine Antwort aus.");
    }
  };
  

  const navigateToResult = () => {
    dispatch(setCorrectAnswersCountAction(correctAnswers)); // Verwende die Aktion, um die Anzahl der korrekten Antworten zu aktualisieren
    navigate('/result', { replace: true }); // Navigiere zur Ergebnisseite
  };

  const categories = Array.from(new Set(dataQuestions.map(question => question.subjectname)));

  return (
    <div className="container">
      <div className="container">
      <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="/Logo.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
      </ul>
    </nav>
        </div>
      <div className="container">
       
        {!category && (
          
          <div>
             <h1>Quiz</h1>
            <label htmlFor="category">Wähle eine Kategorie:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- Bitte wählen --</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        )}
        {category && questions.length > 0 && (
          <div>
            <p>Modul: {category} </p>
            <p>Frage {currentIndex + 1}/{questions.length}:</p>  
            <h2>{questions[currentIndex].question}</h2>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {questions[currentIndex].options.map((option, index) => (
                <li key={index} style={{ listStyleType: 'none' }}>
                  <input 
                    type="radio"
                    value={option} 
                    name="options"
                    id={`q${index}-option`}
                    checked={checked === index} 
                    onChange={() => handleOptionChange(index)} 
                  />
                  <label htmlFor={`q${currentIndex}-option${index}`} style={{ color: correctOptionIndex === index ? 'green' : 'inherit' }}> {option}
                  </label>
                </li>
              ))}
            </ul>
            <button onClick={handleNext}>{currentIndex === questions.length - 1 ? 'Ergebnis anzeigen' : 'Nächste Frage'}</button>
            {answerFeedback && <div>{answerFeedback}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
