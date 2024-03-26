import React from 'react';
import '../styles/Result.css';
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

    return (
        <div className='container'>
            <div className="container">
      <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="/MicrosoftTeams-image.png" alt="Minimal landscape" style={{ width: '50px', height: 'auto' }}/></li>
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
                    <span style={{ color : correctAnswersCount >= 5 ? "#2aff95" : "#ff2a66" }} className='bold'>{correctAnswersCount >= 5 ? "Passed" : "Failed"}</span>
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