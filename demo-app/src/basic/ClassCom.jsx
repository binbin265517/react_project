import React, {Component, Fragment, useState} from 'react'


export default class ClassCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            msg: 'learn react skill'
        }
    }
    clickMe = () => {
        console.log('hahahahhaahha')
    }
    
    handleClick = () => {
        
    }
    render() {
        const {msg, number} = this.state
        return (
            <Fragment>
                <h1>类组件，受控组件</h1>
                <h3>{msg}</h3>
                <div>this number is {number}</div>
                {/* 受控组件 */}
                <input type="text" />
                <input value={msg} onChange={() =>handleClick } type="text" />
                <button onClick={this.handleClick.bind(this, "plus")}>+</button>
                <button onClick={() =>handleClick("minus")}>-</button>
                <button onClick={() => clickMe}>10</button>
            </Fragment>
        )
    }
}