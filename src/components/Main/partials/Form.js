import React from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = (props) => {
    return <InputMask className='responseFormInputTel' onChange={props.onChangeInputValue} value={props.inputValue} mask='+375 (99) 999-99-99' maskChar='_' placeholder='+375 (__) ___-__-__'/>;
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            selectedPosition: 'head',
            selectedResType: 'phone',
            disabledBtn: true,
        };
        this.onChangeResType = this.onChangeResType.bind(this);
        this.onChangeInputValue = this.onChangeInputValue.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
    }

    onChangeInputValue(e) {
        if (this.props.statusBarStage < 2) {
            if (/^(\d{0,9}|)$/.test(e.target.value)) {
                this.setState({
                    ...this.state,
                    inputValue: e.target.value,
                })
            } else {
                e.target.value = this.state.inputValue;
                this.setState({
                    ...this.state,
                    inputValue: this.state.inputValue,
                })
            }
        } else {
            if (this.state.selectedResType === 'mail') {
                let regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
                this.setState({
                    ...this.state,
                    inputValue: e.target.value,
                    disabledBtn: !regexp.test(e.target.value),
                });
            } else {
                let phone = e.target.value.replace(/[+\s\(\)\-\_]/g, '');
                let regexp = /^375(29|25|44|33|17)[1-9]\d{2}\d{2}\d{2}$/;
                this.setState({
                    ...this.state,
                    inputValue: e.target.value,
                    disabledBtn: !regexp.test(phone),
                });
            }
        }
    }

    handleClickNext(e) {
        e.preventDefault();
        if (this.props.statusBarStage < 2) {
            this.props.setQuizResponses(this.state.inputValue);
            this.setState({
                ...this.state,
                inputValue: '',
            });
        } else if (this.props.statusBarStage === 2) {
            this.props.setQuizResponses(this.state.selectedPosition);
            this.setState({
                ...this.state,
                inputValue: '',
            });
        } else {
            this.props.setQuizResponses(this.state.inputValue.replace(/[+\s\(\)\-\_]/g, ''), this.state.selectedResType);
            this.setState({
                inputValue: '',
                selectedPosition: 'head',
                selectedResType: 'phone',
            });
        }
    }

    onChangePosition(e) {
        this.setState({
            ...this.state,
            selectedPosition: e.target.value,
        })
    }

    onChangeResType(e) {
        this.setState({
            ...this.state,
            inputValue: '',
            selectedResType: e.target.value,
        })
    }

    render() {
        switch (true) {
            case this.props.statusBarStage === 0:
                return (
                    <form className='formContainer'>
                        <p className='questNumber'>ВОПРОС 1</p>
                        <p className='questText'>Сколько у вас <strong>дойных <br/> коров?</strong></p>
                        <input 
                            className='inputAmount' 
                            onChange={(e) => this.onChangeInputValue(e)} 
                            value={this.state.inputValue}
                            placeholder='Например: 45'/>
                        <button 
                            className='nextQBtn' 
                            onClick={(e) => this.handleClickNext(e)} 
                            disabled={!this.state.inputValue.length}>Далее <i className='arrow'></i></button>
                    </form>
                );
            case this.props.statusBarStage === 1:
                return (
                    <form className='formContainer'>
                        <p className='questNumber'>ВОПРОС 2</p>
                        <p className='questText'>Сколько <strong>молока в сутки <br/>вы доите?</strong></p>
                        <input 
                            className='inputAmount' 
                            onChange={(e) => this.onChangeInputValue(e)} 
                            value={this.state.inputValue} 
                            placeholder='Например: 12'/>
                        <button 
                            className='nextQBtn' 
                            onClick={(e) => this.handleClickNext(e)} 
                            disabled={!this.state.inputValue.length}>Далее <i className='arrow'></i></button>
                    </form>
                )
            case this.props.statusBarStage === 2:
                return (
                    <form className='formContainer'>
                        <p className='questNumber'>ВОПРОС 3</p>
                        <p className='questText'><strong>Вы являетесь?</strong></p>
                        <div className='checkboxContainer3'>
                            <label className='checkbox'>Руководителем фермы
                                <input type='radio' value='head' checked={this.state.selectedPosition === 'head'} onChange={(e) => this.onChangePosition(e)} />
                                <span className='checkmark'></span>
                            </label>
                            <label className='checkbox'>Зоотехником
                                <input type='radio' value='zootech' checked={this.state.selectedPosition === 'zootech'} onChange={(e) => this.onChangePosition(e)} />
                                <span className='checkmark'></span>
                            </label>
                            <label className='checkbox'>Ветеринаром
                                <input type='radio' value='vet' checked={this.state.selectedPosition === 'vet'} onChange={(e) => this.onChangePosition(e)} />
                                <span className='checkmark'></span>
                            </label>
                        </div>
                        <button className='nextQBtn' onClick={(e) => this.handleClickNext(e)} >Далее <i className='arrow'></i></button>
                    </form>
                )
            case this.props.statusBarStage === 3:
                return (
                    <form className='formContainer'>
                        <p className='questTextResponse'>Куда прислать вам ответ?</p>
                        <div className='checkboxContainer5'>
                            <div className='checkBoxLineTop'>
                                <label className='checkbox'>По телефону
                                    <input type='radio' value='phone' name='radio' checked={this.state.selectedResType === 'phone'} onChange={(e) => this.onChangeResType(e)} />
                                    <span className='checkmark'></span>
                                </label>
                                <label className='checkbox'>E-mail
                                    <input type='radio' value='mail' name='radio' checked={this.state.selectedResType === 'mail'} onChange={(e) => this.onChangeResType(e)} />
                                    <span className='checkmark'></span>
                                </label>
                                <label className='checkbox'>Viber
                                    <input type='radio' value='viber' name='radio' checked={this.state.selectedResType === 'viber'} onChange={(e) => this.onChangeResType(e)} />
                                    <span className='checkmark'></span>
                                </label>
                            </div>
                            <div className='checkBoxLineBottom'>
                                <label className='checkbox'>Telegram 
                                    <input type='radio' value='telegram' name='radio' checked={this.state.selectedResType === 'telegram'} onChange={(e) => this.onChangeResType(e)} />
                                    <span className='checkmark'></span>
                                </label>
                                <label className='checkbox'>Whatsapp
                                    <input type='radio' value='whatsapp' name='radio' checked={this.state.selectedResType === 'whatsapp'} onChange={(e) => this.onChangeResType(e)} />
                                    <span className='checkmark'></span>
                                </label>
                            </div>
                            {this.state.selectedResType !== 'mail' ? 
                                <label className='responseFormLabel'>Введите ваш номер телефона
                                    <PhoneInput inputValue={this.state.inputValue} onChangeInputValue={this.onChangeInputValue} />
                                </label> :
                                <label className='responseFormLabel'>Введите ваш e-mail
                                    <input className='responseFormInputMail' placeholder='simple@example.com' onChange={(e) => this.onChangeInputValue(e)} value={this.state.inputValue} />
                                </label>
                            }
                            <button className='getResBtn' onClick={(e) => this.handleClickNext(e)} disabled={this.state.disabledBtn}>Отправить и получить ответ</button>
                        </div>
                    </form>
                )
            default:
                return (
                    <form className='formContainer'>
                        <p className='questTextResponse'>Спасибо за участие в опросе!</p>
                    </form>
                );
        }
    }
}

export { Form }