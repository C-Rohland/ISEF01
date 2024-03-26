import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetResultAction } from '../redux/result_reducer'; 
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const correctAnswersCount = useSelector(state => state.result.correctAnswersCount);

    const onRestart = () => {
        dispatch(resetResultAction());
    };

    const navigateToLeaderboard = () => {
        navigate('/leaderboard', { replace: true });
    };

    function getFeedbackMessage(points) {
        if (points === 0) {
          return "Du solltest nochmal das Skript durchgehen...";
        } else if (points <= 4) {
          return "Durchgefallen: Es gibt noch einiges zu lernen.";
        } else if (points === 5) {
          return "Bestanden: Das war knapp, aber du hast es geschafft!";
        } else if (points <= 7) {
          return "Bestanden: Gut gemacht, du bist auf dem richtigen Weg!";
        } else if (points <= 9) {
          return "Bestanden: Tolle Leistung, du bist fast perfekt!";
        } else {
          return "Bereit für die Klausur!";
        }
      }
      

    return (
        <div className='container'>
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
            <h1>Quiz Application</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Correct Answers : </span>
                    <span className='bold'>{`${correctAnswersCount} / 10`}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result: </span>
                    <span style={{ color : correctAnswersCount >= 5 ? "#2aa9ff" : "#d02a55" }} className='bold'>
                    {getFeedbackMessage(correctAnswersCount)}
                    </span>
                </div>
            </div>

            <div className="container">
                <button onClick={onRestart}>Restart Quiz</button>
                <button onClick={navigateToLeaderboard} class="secondary">Vergleiche dein Ergebnis</button>
            </div>
        </div>
    );
};

export default Result;