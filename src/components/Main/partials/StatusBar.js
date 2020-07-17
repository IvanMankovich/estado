import React from 'react';

function StatusBar(props) {
    return (
        <div className='statusBar'>
            <ul>
                <li className='prgressLineContainer'>
                    <div className={`progressLine1 ${props.statusBarStage >= 1 ? 'progressLineActive' : ''}`}></div>
                    <div className={`progressLine2 ${props.statusBarStage >= 2 ? 'progressLineActive' : ''}`}></div>
                </li>
                <li className={`progressPoint1 progressPointActive`}></li>
                <li className={`progressPoint2 ${props.statusBarStage >= 1 ? 'progressPointActive' : ''}`}></li>
                <li className={`progressPoint3 ${props.statusBarStage >= 2 ? 'progressPointActive' : ''}`}></li>
            </ul> 
        </div>
    )
}

export { StatusBar }