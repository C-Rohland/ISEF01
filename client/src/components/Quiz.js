import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Stelle sicher, dass dieser Hook importiert wird
import dataQuestions from '../database/dataQuestions';
import { useDispatch } from 'react-redux';
import { setCorrectAnswersCountAction } from '../redux/result_reducer'; // Stelle sicher, dass der Pfad korrekt ist


const Quiz = () => {
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(undefined);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate Hook richtig initialisieren

  useEffect(() => {
    if (category) {
      const filteredQuestions = dataQuestions.filter(question => question.subjectname === category);
      setQuestions(filteredQuestions);
      setCurrentIndex(0); // Reset currentIndex when category changes
      setCorrectAnswers(0); // Reset correctAnswers when category changes
    }
  }, [category]);

  const handleOptionChange = (index) => {
    setChecked(index);
  };

  // const handleNext = () => {
  //   if (checked !== undefined) { // Geändert von checked !== null
  //     const selectedOptionText = questions[currentIndex].options[checked];
  //     const isCorrect = selectedOptionText === questions[currentIndex].answer; 

  //     if (isCorrect) {
  //       setCorrectAnswers(prevCount => prevCount + 1);
  //       setAnswerFeedback("Richtig!");
  //     } else {
  //       setAnswerFeedback("Falsch!");
  //     }

  //     setTimeout(() => {
  //       if (currentIndex < questions.length - 1) {
  //         setCurrentIndex(prevIndex => prevIndex + 1); // Direktes Aktualisieren von currentIndex
  //       } else {
  //         navigateToResult();
  //       }
  //       setChecked(undefined); // Zurücksetzen der Auswahl
  //       setAnswerFeedback(null); // Zurücksetzen des Feedbacks
  //     }, 1000);
  //   } else {
  //     alert("Bitte wählen Sie eine Antwort aus.");
  //   }
  // };
  const handleNext = () => {
    if (checked !== undefined) {
      const selectedOptionText = questions[currentIndex].options[checked];
      const isCorrect = selectedOptionText === questions[currentIndex].answer;
      
      if (isCorrect) {
        setCorrectAnswers(prevCount => prevCount + 1);
        setAnswerFeedback("Richtig!");
        setCorrectOptionIndex(null); // Keine Hervorhebung, da die Antwort richtig ist
      } else {
        setAnswerFeedback("Falsch!");
        // Finde den Index der richtigen Antwort und speichere ihn
        const correctIndex = questions[currentIndex].options.findIndex(
          option => option === questions[currentIndex].answer
        );
        setCorrectOptionIndex(correctIndex);
      }
      
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
        <h1>Quiz</h1>
        {!category && (
          <div>
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
                  {/* <label htmlFor={`q${index}-option`}>{option}</label> */}
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
