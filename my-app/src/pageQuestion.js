import { Component } from "react";
import "./pageQuestion.css"

class Page extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            text: ''
        }
    }


    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text.length !== 0) {
            const newItem = {
                question: this.state.text,
                id: this.state.data.length + 1
            };

            this.setState(() => ({
                data: [...this.state.data, newItem],
                text: ''
            }));
        }
    }

    onDelete = (id) => {
        this.setState(() => ({
            data: this.state.data.filter(item => item.id !== id)
        }))
    }

    onEdit = (id, value) => {
        console.log(this.state.data)

        const copyArr = this.state.data
       
        for (let item of copyArr) {
            if (item.id === id) {
                item.question = value
                console.log(item)
            }
        }
        this.setState(() => ({
            data: copyArr
        }))
    }

    render() {
        return(
            <div className="app">
                <div className="app-info">
                    <h2 className="send-question">Задать вопрос:</h2>
                    <form onSubmit={this.onSubmit}>
                       <div className="form-list">
                            <input
                            type="text"
                            onChange={this.onChange}
                            value={this.state.text}
                            placeholder="Твой вопрос" className="input-info form-item"> 
                            </input>
                            <button type="submit" className="btn btn-light form-item">Отправить</button>
                       </div>
                    </form>
                </div>
                <div className="app-questions">
                    <QuestionList items={this.state.data} onDelete={this.onDelete} onEdit={this.onEdit}/>
                </div>
            </div>
        );
    }
}


class QuestionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editedText: ''
        }
    }

    onChange = (e) => {
        this.setState({
            editedText: e.target.value
        })
    
    }
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                   <div className="question">
                        <input type="text" key={item.id} defaultValue={item.question} onChange={this.onChange} className="input-question"></input>
                        <div className="submit-question">
                            <button type="submit" onClick={() => this.props.onEdit(item.id, this.state.editedText)}><i className="fas fa-save"></i></button>
                            <button type="submit" onClick={() => this.props.onDelete(item.id)}><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Page;
