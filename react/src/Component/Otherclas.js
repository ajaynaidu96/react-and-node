import React, { Component } from "react";
import Clas from "./Clas";

class Otherclas extends Component{
    render(){
        return(<h1>
            my class component
            <Clas />
            </h1>)
    };
}

export default Otherclas;