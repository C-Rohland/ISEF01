// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'


// /** Custom Hook */
// import { useFetchQestion } from '../hooks/FetchQuestion'
// import { updateResult } from '../hooks/setResult'


// export default function Questions({ onChecked }) {

//     const [checked, setChecked] = useState(undefined)
//     const { trace, queue } = useSelector(state => state.questions); //neu
   
//     const questions = queue[trace]; // Aktuelle Frage basierend auf dem Trace-Index

//     const dispatch = useDispatch()

//     useEffect(() => {
//       if (typeof checked !== 'undefined') {
//           dispatch(updateResult({ trace, checked }))
//           onChecked(checked); // Aktualisiere den ausgewählten Wert im übergeordneten Zustand, falls benötigt
//       }
//   }, [checked, dispatch, trace, onChecked]); // Füge onChecked zu den Abhängigkeiten hinzu, falls verwendet

//   if (!questions) return <h3 className='text-light'>Lade Fragen...</h3>
    


//     function onSelect(i){
//         onChecked(i)
//         setChecked(i)
//     }

//   return (
//     <div className='questions'>
//         <h2 className='text-light'>{questions?.question}</h2>

//          <ul>
                // {questions?.options.map((option, index) => (
                //     <li key={index}>
                //         <input 
                //             type="radio"
                //             value={option} // Der Wert sollte möglicherweise der Option entsprechen
                //             name="options"
                //             id={`q${index}-option`}
                //             checked={checked === index} // Markiere die Option als ausgewählt
                //             onChange={() => setChecked(index)} // Aktualisiere den ausgewählten Wert
                //         />

                //         <label htmlFor={`q${index}-option`}>{option}</label>
                //     </li>
                // ))}
//             </ul>
//         </div>
//   )
// }

import React, { useState, useEffect } from 'react';

const QuestionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState([]); 
  const [checked, setChecked] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`);
      if (!response.ok) {
        throw new Error('Fehler beim Laden der Fragen: ' + response.statusText);
      }
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Fehler beim Laden der Fragen:", error);
    }
  };
    
    fetchData();
  }, []);

  const loadNextQuestion = () => {
    setCurrentIndex((prevIndex) => {
      // Gehe zur nächsten Frage oder bleibe bei der letzten, wenn am Ende
      return prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  // Anzeige, während die Frage geladen wird
  if (questions.length === 0) return <div>Lädt...</div>;

  const questionData = questions[currentIndex]; // Aktuelle Frage basierend auf dem Index

  return (
    <div>
      <h2>{questionData.question}</h2>
      <ul>
        {questionData.options && questionData.options.map((option, index) => (
          <li key={index}>
            <input 
              type="radio"
              value={option} 
              name="options"
              id={`q${index}-option`}
              checked={checked === index} 
              onChange={() => setChecked(index)} 
            />
            <label htmlFor={`q${index}-option`}>{option}</label>
          </li>
        ))}
      </ul>
      {currentIndex < questions.length - 1 && (
        <button onClick={loadNextQuestion}>Nächste Frage</button> 
      )}
    </div>
  );
  
};

export default QuestionComponent;

