import React, { useState } from 'react'
import Questions from './Questions'
import { MoveNextQuestion } from '../hooks/FetchQuestion';
import { pushResultAction } from '../redux/result_reducer';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Quiz({ onChecked }) {

    const [check, setChecked] = useState(undefined)
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const currentIndex = trace; // Verwenden Sie trace aus dem Redux-Store, um den currentIndex zu erhalten
    const questions = queue;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    /** next button event handler */
    function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(pushResultAction(check))
            }
        } else {
            // Letzte Frage, markiere das Quiz als abgeschlossen
            setIsQuizCompleted(true);
        }
        setChecked(undefined); // Zurücksetzen des ausgewählten Wertes
    }

    function navigateToLeaderboard(){
        navigate('/leaderboard', { replace: true });
    }
    function navigateToResult(){
        navigate('/result', { replace: true });
    }


    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz</h1>
            <Questions onChecked={onChecked} />
            <div className='grid'>
                {/* Zeige den Button nur an, wenn das Quiz abgeschlossen ist und die aktuelle Frage die letzte Frage ist */}
                {isQuizCompleted && currentIndex === 9 && (
                    <button className='btn finish' onClick={navigateToResult}>Quiz abschließen</button>
                )}
                {/* Zeige den Button nur an, wenn das Quiz abgeschlossen ist und die aktuelle Frage die letzte Frage ist */}
                {isQuizCompleted && currentIndex === 9 && (
                    <button className='btn finish' onClick={navigateToLeaderboard}>Vergleiche dein Ergebnis</button>
                )}
            </div>
        </div>
  );
  

}