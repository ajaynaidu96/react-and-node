import React from "react";

function Funprop(props){
    return(
        <div>
        <h1>fun component</h1>
        {props.children}
        </div>
    );
}

export default Funprop;