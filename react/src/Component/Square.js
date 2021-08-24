import React, { Component } from "react";

class Square extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    
    render() {
        return (
            <button className="Square"
            onClick={() =>
            this.setState({value:'15'})}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;