import { Component } from "react";
import "./login.css";
import Page from "./pageQuestion";

const login = 'admin'
const password = '1234'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            enter: false
        }
    } 


    onChangeLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.login.length !== 0 || this.state.password.length !== 0) {
            if (this.state.login !== login || this.state.password !== password) {
                alert('Неверные данные!');
            } else {
                this.setState({
                    enter: true
                })
            }
        }
    }

    render() {
        return(
            <div>
                {this.state.enter ? <Page/> : 
                    <div className="container">
                        <form onSubmit={this.onSubmit}>
                            <h2  className="login_form" style={{color: '#fff'}}>Вход в личный кабинет</h2>
                            <div className="fields">
                                <div className="field_1">
                                    <label style={{color: '#fff'}}>
                                        Введите имя    
                                        <input className="field_item" type="text" onChange={this.onChangeLogin} value={this.state.login}></input>
                                    </label>
                                </div>
                                <div className="field_2">
                                    <label style={{color: '#fff'}}>
                                        Введите пароль
                                        <input className="field_item" type="password" onChange={this.onChangePassword} value={this.state.password}></input>
                                    </label>
                                </div>
                            </div>
                            <div className="btn_submit">
                                <button type="submit" className="btn btn-light form-item">Войти</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default Login;