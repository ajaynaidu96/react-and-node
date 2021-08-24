import React, { Component } from "react";

class Classtate extends Component {

   constructor(props) {
       super(props);
       this.state = {
           nameoftheclass: "Class componenet",
           extends: "componenet"
       }
   }

   changeClassName = () => {
       this.setState({
           nameoftheclass: "testing project"
       })

   };

    render() {
        return (<h1 onClick={this.changeClassName}>
            Hello world....!
            {this.state.nameoftheclass} {this.state.extends}
        </h1>)
    }
}

export default Classtate;