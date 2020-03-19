import React, { Component } from 'react';
// To display local time. If time allowed I will do worldTimeApi instead.

class Timer extends Component{
    state={
        date : new Date()
    };
    
    callSec(){
        setInterval(() =>{
        this.setState({date: new Date()});
        },1000);
    }
    render(){
        return(
            <div>
                The local time is: {this.state.date.toLocaleTimeString()}
                {this.callSec()} 
            </div>
            
        );
    }        
}
export default Timer;