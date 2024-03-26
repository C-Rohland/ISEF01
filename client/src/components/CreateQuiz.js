import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Definiert eine Liste von Kategorien für die Quizfragen
const categories = ["Wirtschaftsinformatik", "Requirements Engineering", "IT Projektmanagement"];

// Hauptkomponente für das Erstellen einer neuen Quizfrage
export default function CreateQuizQuestion() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(Array(4).fill(''));
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  // Funktion zum Speichern der neuen Frage
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
    <div className="container">
      <div className="container">
      <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="Logo.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
      </ul>
    </nav>
        </div>
      <div className="container">
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
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {answers.map((answer, index) => (
            <li key={index} className="container" style={{ listStyleType: 'none' }}>
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
        <div className="container">
          <button type="button" onClick={handleCancel}>Abbrechen</button>
          <button type="button" onClick={handleSave} class="secondary">Frage speichern</button>
        </div>
      </div>
    </div>
  );
}
