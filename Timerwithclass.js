import React,{Component} from 'react';


class Timerwithclass extends Component{
    state={
        time:0,
        timerOn:false,
    }
    startTimer = ()=>{
        this.setState({
            timerOn:true,
            time:this.state.time
        });
        this.timer = setInterval(()=>{
            this.setState((state)=>({
                time:state.time+10
            }));
        },10);
    };
    stopTimer = ()=>{
        this.setState({timerOn:false});
        clearInterval(this.timer);
    };
    handleReset = ()=>{
        clearInterval(this.timer);
        this.setState({time:0, timerOn:false});
    };
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        const {time,timerOn}=this.state
        return(
            <div className="Timer">
                <h2>StopWatch</h2>
                <div id="display">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                </div>
                <div>
                    
                        <button onClick={this.startTimer}>Start</button>
                        <button onClick={this.stopTimer}>Stop</button>
                        <button onClick={this.handleReset}>Reset</button>
                        <button onClick={this.startTimer}>Resume</button>
                
                    
                </div>
            </div>
        )
    }
}
export default Timerwithclass;