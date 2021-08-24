import React, { Component } from "react";

class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {username:'ajay'}
    };
    myChangeHandler = (Event) =>{
        this.setState({username: Event.target.value});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name</p>
                <input 
                type = 'text'
                onChange={this.myChangeHandler}></input>
                </form>
        )
    };
}

export default Forms;