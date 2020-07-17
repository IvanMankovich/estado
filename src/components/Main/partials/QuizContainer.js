import React from 'react';
import { Form } from './Form';
import { StatusBar } from './StatusBar';

function QuizContainer(props) {
    return (
        <div className='quizContainer'>
            <StatusBar {...props} />
            <Form {...props} />
        </div>
    )
}

export { QuizContainer }