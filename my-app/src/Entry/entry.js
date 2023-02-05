import { Component } from "react"
import "./entry.css"
import Login from "../Login/login";
import Registration from "../Registration/registration";


class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: false,
            registration: false
        }
    }

    onClick = (e) => {
        this.setState({
            [e.target.name]: true
        })

    }

    render() {
        let element = false
        if (this.state.entry) {
            element = <Login/>
        } else if (this.state.registration) {
            element = <Registration/>
        }

        return(
            <div>
                {element ? element :
                    <div className="header">
                        <div className="header header__nav">
                            <a href="#" className="header header__nav_item" name="entry" onClick={this.onClick}>Войти</a>
                            <a href="#" className="header header__nav_item" name="registration" onClick={this.onClick}>Регистрация</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Entry