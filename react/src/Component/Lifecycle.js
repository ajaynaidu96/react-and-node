import React, { Component } from "react";

class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "This name will change in 5 sec"
        }
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({name: "This is a componentDidMount method"})
        }, 5000)
    }
    componentDidUpdate = () =>{
        console.log("component updated")
    }
    render(){
        return(
            <h1>{this.state.name}</h1>
        )
    }
}

export default Lifecycle;