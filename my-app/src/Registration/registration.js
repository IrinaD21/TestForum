import { Component } from "react";
import "../Login/login.css";
// import Page from "../PageQuestion/pageQuestion";

const login = 'admin'
const password = '1234'

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            enter: false
        }
    } 


    onChangeCredentials = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
                {/* {this.state.enter ? <Page/> :  */}
                    <div className="container">
                        <form onSubmit={this.onSubmit}>
                            <h2  className="login_form" style={{color: '#fff'}}>Регистрация</h2>
                            <div className="login_form__fields">
                                <div className="login_form__field_1">
                                    <label style={{color: '#fff'}}>
                                        Введите имя    
                                        <input className="login_form__fields field_item" type="text" onChange={this.onChangeCredentials} value={this.state.login} name="login"></input>
                                    </label>
                                </div>
                                <div className="login_form__field_2">
                                    <label style={{color: '#fff'}}>
                                        Введите пароль
                                        <input className="login_form__fields field_item" type="password" onChange={this.onChangeCredentials} value={this.state.password} name="password"></input>
                                    </label>
                                </div>
                            </div>
                            <div className="btn_submit">
                                <button type="submit" className="btn btn-light form-item">Продолжить</button>
                            </div>
                        </form>
                    </div>
                {/* } */}
            </div>
        )
    }
}

export default Registration;