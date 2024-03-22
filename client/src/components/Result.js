// import React from 'react'
// import '../styles/Result.css';
// import { Link } from 'react-router-dom';

// import Leaderboard from './Leaderboard';
// import { useDispatch, useSelector } from 'react-redux';
// import { earnPoints_Number, flagResult } from '../helper/helper';

// /** import actions  */
// // import { resetAllAction } from '../redux/question_reducer';
// import { resetResultAction } from '../redux/result_reducer';
// import { usePublishResult } from '../hooks/setResult';


// export default function Result() {

//     const dispatch = useDispatch()
//     const username = sessionStorage.getItem('username');
//     const { questions : { queue ,answers}, result : { result }}  = useSelector(state => state)

//     const totalPoints = queue.length * 10;
//     const earnPoints = earnPoints_Number(result, answers, 10)
//     const flag = flagResult(totalPoints, earnPoints)
    

//     /** store user result */
//     usePublishResult({ 
//         result, 
//         username,
//         points: earnPoints,
//         achived : flag ? "Passed" : "Failed" });

//     function onRestart(){
//         // dispatch(resetAllAction())
//         dispatch(resetResultAction())
//     }

//   return (
//     <div className='container'>
//         <h1 className='title text-light'>Quiz Application</h1>

//         <div className='result flex-center'>
//             <div className='flex'>
//                 <span>Username</span>
//                 <span className='bold'>{username || ""}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Quiz Points : </span>
//                 <span className='bold'>{totalPoints || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Questions : </span>
//                 <span className='bold'>{ queue.length || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Total Earn Points : </span>
//                 <span className='bold'>{earnPoints || 0}</span>
//             </div>
//             <div className='flex'>
//                 <span>Quiz Result</span>
//                 <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
//             </div>
//         </div>

//         <div className="start">
//             <Link className='btn' to={'/main'} onClick={onRestart}>Restart</Link>
//         </div>

//         <div className="container">
//             {/* result table */}
//         <Leaderboard></Leaderboard>
//         </div>
//     </div>
//   )
// }

import React from 'react';
import '../styles/Result.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { earnPoints_Number } from '../helper/helper';
import { useNavigate } from 'react-router-dom'

// Importieren Sie die Aktion, um das Ergebnis zurückzusetzen
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult';

export default function Result() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = sessionStorage.getItem('username');
    const { questions: { answers }, result: { result } } = useSelector(state => state);

    // Berechnen Sie die Punkte und ob die Prüfung bestanden wurde
    const correctAnswersCount = earnPoints_Number(result, answers, 10);

    // Veröffentlichen Sie das Ergebnis (angenommen, diese Funktion wurde entsprechend angepasst)
    usePublishResult({ 
        result, 
        username,
        points: correctAnswersCount,
        achived : correctAnswersCount >= 5 ? "Passed" : "Failed"
    });

    function onRestart(){
        dispatch(resetResultAction());
    }
    function navigateToLeaderboard(){
        navigate('/leaderboard', { replace: true });
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            <div className='result flex-center'>
                {/* Nur die Anzahl der korrekt beantworteten Fragen anzeigen */}
                <div className='flex'>
                    <span>Correct Answers : </span>
                    <span className='bold'>{`${correctAnswersCount} / 10`}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result</span>
                    <span style={{ color : correctAnswersCount >= 5 ? "#2aff95" : "#ff2a66" }} className='bold'>{correctAnswersCount >= 5 ? "Passed" : "Failed"}</span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/main'} onClick={onRestart}>Restart Quiz</Link>
            </div>
            <div className="start">
                <Link className='btn' to={'/leaderboard'} onClick={navigateToLeaderboard}>Vergleiche dein Ergebnis</Link>
            </div>

        </div>
    )
}

