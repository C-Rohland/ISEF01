import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css';

const categories = ["Wirtschaftsinformatik", "Requirements Engineering", "IT Projektmanagement"];

export default function CreateQuizQuestion() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(Array(4).fill(''));
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const handleSave = () => {
    if (category && question && answers.every(answer => answer.trim() !== '') && correctAnswerIndex !== null) {
      const newQuestion = {
        question,
        options: answers,
        answer: answers[correctAnswerIndex],
        subjectname: category
      };

      // Speichern der neuen Frage im localStorage
      const savedQuestions = JSON.parse(localStorage.getItem("savedQuestions") || "[]");
      savedQuestions.push(newQuestion);
      localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));

      alert('Frage gespeichert!');
      navigate('/main');
    } else {
      alert('Bitte stelle sicher, dass alle Felder ausgefüllt sind und eine Antwort ausgewählt wurde.');
    }
  };

  const handleCancel = () => {
    navigate('/main');
  };

  const handleAnswerChange = (text, index) => {
    const newAnswers = answers.map((answer, i) => i === index ? text : answer);
    setAnswers(newAnswers);
  };

  return (
    <div className="content-box with-border">
      <div className="login-container">
        <h1>Neue Quizfrage erstellen</h1>
        <div>
          <label htmlFor="category">Kategorie:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">-- Bitte wählen --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="question">Frage:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <ul>
          {answers.map((answer, index) => (
            <li key={index} className="form-group">
              <input
                type="radio"
                name="correctAnswer"
                checked={correctAnswerIndex === index}
                onChange={() => setCorrectAnswerIndex(index)}
              />
              <input
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(e.target.value, index)}
                placeholder={`Antwort ${index + 1}`}
              />
            </li>
          ))}
        </ul>
        <div className="form-actions">
          <button type="button" onClick={handleCancel}>Abbrechen</button>
          <button type="button" onClick={handleSave}>Frage speichern</button>
        </div>
      </div>
    </div>
  );
}
