import React, { useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Quiz({ onChecked }) {

    const [check, setChecked] = useState(undefined)
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    /** next button event handler */
    function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        } else {
            // Letzte Frage, markiere das Quiz als abgeschlossen
            setIsQuizCompleted(true);
        }
        setChecked(undefined); // Zurücksetzen des ausgewählten Wertes
    }

    function navigateToResult(){
        navigate('/result', { replace: true });
    }


  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz</h1>

        {/* display questions */}
        <Questions onChecked={onChecked} />

        <div className='grid'>
                {!isQuizCompleted ? (
                    <button className='btn next' onClick={onNext}>Nächste Frage</button>
                ) : (
                    <button className='btn finish' onClick={navigateToResult}>Quiz abschließen</button>
                )}
            </div>
    </div>
  )

}