import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './styleheets/reset.css';
import './styleheets/style.css';
import emailjs from 'emailjs-com';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusBarStage: 0,
            quizResponses: {
                cowsAmount: null,
                milkValue: null,
                position: null,
                responseType: null,
                sendResponseTo: null,
            },
        };
        this.setQuizResponses = this.setQuizResponses.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    sendData() {
        const jsonResult = JSON.stringify(this.state.quizResponses);
        const templateParams = {
            name: 'E-stado',
            message: jsonResult
        }
        emailjs.send('yandex', 'template_0iQK8f1e', templateParams, 'user_D7RLROMMbazb5bBgDJaZG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    setQuizResponses(param1, param2) {
        switch (true) {
            case this.state.statusBarStage === 0:
                this.setState({
                    statusBarStage: this.state.statusBarStage + 1,
                    quizResponses: {
                        ...this.state.quizResponses,
                        cowsAmount: param1,
                    }
                });
                break;
            case this.state.statusBarStage === 1:
                this.setState({
                    statusBarStage: this.state.statusBarStage + 1,
                    quizResponses: {
                        ...this.state.quizResponses,
                        milkValue: param1,
                    }
                });
                break;
            case this.state.statusBarStage === 2:
                this.setState({
                    statusBarStage: this.state.statusBarStage + 1,
                    quizResponses: {
                        ...this.state.quizResponses,
                        position: param1,
                    }
                });
                break;
            case this.state.statusBarStage === 3:
                this.setState({
                    statusBarStage: this.state.statusBarStage + 1,
                    quizResponses: {
                        ...this.state.quizResponses,
                        responseType: param1,
                        sendResponseTo: param2,
                    }
                }, () => this.sendData());
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <div className="App">
            <Header />
                <Main 
                    statusBarStage={this.state.statusBarStage}
                    quizResponses={this.state.quizResponses}
                    setQuizResponses={this.setQuizResponses}
                    sendData={this.sendData}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
