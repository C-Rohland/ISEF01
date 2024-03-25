import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';
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
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='result flex-center'>
                <div className='flex'>
                    <span>Correct Answers : </span>
                    <span className='bold'>{`${correctAnswersCount} / 10`}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    <span style={{ color : correctAnswersCount >= 5 ? "#2aff95" : "#ff2a66" }} className='bold'>{correctAnswersCount >= 5 ? "Passed" : "Failed"}</span>
                </div>
            </div>

            <div className="restart">
                <Link className='btn' to={'/main'} onClick={onRestart}>Restart Quiz</Link>
            </div>
            <div className="start">
                <Link className='btn' to={'/leaderboard'} onClick={navigateToLeaderboard}>Vergleiche dein Ergebnis</Link>
            </div>
        </div>
    );
};

export default Result;