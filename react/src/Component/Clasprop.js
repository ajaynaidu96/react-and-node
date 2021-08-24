import React, { Component } from "react";


class Clasprop extends Component{
    render(){
        return(<h1>Class component
            {this.props.children}
            </h1>)
    };
}

export default Clasprop;