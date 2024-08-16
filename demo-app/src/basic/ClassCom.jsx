import React, {Component, Fragment, setState} from 'react'


export default class ClassCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            msg: 'learn react skill'
        }
    }
    clickMe = () => {
        this.setState({
            number: this.state.number + 10
        })
    }
    
    handleClick = (e) => {
        this.setState({
            number: this.state.number + (e === 'plus' ? 1 : -1)
        }, () => {
            console.log('number is callback', this.state.number)
        })
        console.log('number in handleClick', this.state.number)
    }
    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }
    render() {
        const {msg, number} = this.state
        return (
            <Fragment>
                <h1>{this.props.name}，类组件state的用法</h1>
                <h3>{msg}</h3>
                <div>this number is {number}</div>
                {/* 受控组件 */}
                <input type="text" />
                <input value={msg} onChange={(e) =>this.handleChange(e) } type="text" />
                <button onClick={() =>this.handleClick("plus")}>+</button>
                <button onClick={() =>this.handleClick("minus")}>-</button>
                <button onClick={() => this.clickMe}>10</button>
            </Fragment>
        )
    }
}