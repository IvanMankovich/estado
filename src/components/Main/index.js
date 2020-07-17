import React from 'react';
import { QuizContainer } from './partials/QuizContainer';

function Main(props) {
    return (
        <main>
            <h4>Ответьте на 3 вопроса и узнайте</h4>
            <h3>Как <strong>увеличить удой каждой коровы до 15%</strong> путем</h3>
            <div className='services'>
                <div className='servicePoint1'>
                    <div className='servicePointPicContainerOuter'>
                        <div className='servicePointPicContainerInner'>
                            <div className='servicePointPic'></div>
                        </div>
                    </div>
                    <p className='servicePointText1'><strong>Своевременного <br/>определения половой охоты</strong> особенно если она не заметна по внешним признакам</p>
                </div>
                <div className='servicePoint2'>
                    <div className='servicePointPicContainerOuter'>
                        <div className='servicePointPicContainerInner'>
                            <div className='servicePointPic'></div>
                        </div>
                    </div>
                    <p className='servicePointText2'><strong>Анализом состояния <br/>здоровья коровы</strong><br/> при наблюдении за жвачкой, активностью и температурой тела</p>
                </div>
                <div className='servicePoint3'>
                    <div className='servicePointPicContainerOuter'>
                        <div className='servicePointPicContainerInner'>
                            <div className='servicePointPic'></div>
                        </div>
                    </div>
                    <p className='servicePointText3'><strong>Выявление хромоты</strong> предупреждением и выявлением развития хромоты</p>
                </div>
            </div>
            <QuizContainer {...props} />
        </main>
    )
}

export { Main }