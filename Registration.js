import React, { Component } from "react";


class Registration extends Component{
    render(){
        return(
            <div className="table">
                <div className="table-header">
                    <div className="row">
                        <div className='column'>First name</div>
                        <input type="text"></input>
                        <div className='column'>Last name</div>
                        <input type="text"></input>
                        <div className='column'>Email</div>
                        <input type="text"></input>
                        <div className='column'>Age</div>
                        <input type="number"></input><br></br>
                        <button className="icon">submit</button>
                        </div>
                    </div>
                </div>
        )
            
    };
}

export default Registration;