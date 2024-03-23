import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dataQuestions from '../database/dataQuestions';

const Quiz = () => {
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checked, setChecked] = useState(undefined);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      // Filter questions based on selected category
      const filteredQuestions = dataQuestions.filter(question => question.subjectname === category);
      setQuestions(filteredQuestions);
      setCurrentIndex(0); // Reset currentIndex when category changes
    }
  }, [category]);

  const handleOptionChange = (index) => {
    setChecked(index);
  };

  const handleNext = () => {
    if (checked !== null) {
      const selectedOptionText = questions[currentIndex].options[checked];
      const isCorrect = selectedOptionText === questions[currentIndex].answer; 
  
      if (isCorrect) {
        setCorrectAnswers((prev) => {
          const newCount = prev + 1;
          return newCount;
        });
        setAnswerFeedback("Richtig!");
      } else {
        setAnswerFeedback("Falsch!");
      }
  
      setTimeout(() => {
        loadNextQuestion();
        setChecked(undefined);
        setAnswerFeedback(null);
      }, 1000);
    } else {
      alert("Bitte wählen Sie eine Antwort aus.");
    }
  };

  const loadNextQuestion = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const navigateToResult = () => {
    navigate('/result', { replace: true });
  };

  const categories = Array.from(new Set(dataQuestions.map(question => question.subjectname)));

  return (
    <div className="content-box with-border">
      <div className="login-container">
        <h1>Quiz</h1>
        {!category && (
          <div>
            <label htmlFor="category">Wähle eine Kategorie:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- Bitte wählen --</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
        )}
        {category && questions.length > 0 && (
          <div>
            <h2>{questions[currentIndex].question}</h2>
            <ul>
              {questions[currentIndex].options.map((option, index) => (
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
            <button onClick={handleNext}>Nächste Frage</button>
            {answerFeedback && <div>{answerFeedback}</div>}
            {currentIndex === questions.length - 1 && <button onClick={navigateToResult}>Ergebnis anzeigen</button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
