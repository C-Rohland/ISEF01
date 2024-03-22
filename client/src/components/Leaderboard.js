import React from 'react'
import '../styles/Result.css';
import { Link } from 'react-router-dom';

import Result from './Result';
import { useDispatch, useSelector } from 'react-redux';
import { earnPoints_Number, flagResult } from '../helper/helper';

/** import actions  */
// import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';


export default function Leaderboard() {

    const dispatch = useDispatch()
    const username = sessionStorage.getItem('username');
    const { questions : { queue ,answers}, result : { result }}  = useSelector(state => state)

    const totalPoints = queue.length * 10; 
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)
    

    /** store user result */
    usePublishResult({ 
        result, 
        username,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        // dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>{username || ""}</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
                <span className='bold'>{ queue.length || 0}</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>

        <div className="start">
            <Link className='btn' to={'/main'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="container">
            {/* result table */}
            <Leaderboard></Leaderboard>
        </div>
    </div>
  )
}