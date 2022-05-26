import { Component } from 'react';

export class Buttons extends Component{
    constructor(props){
        super(props);
    }
    handleClick = (e)=>{
        console.log(e);
    }
    render(){
        return(
            <div>
                <h2>This is  a button component</h2>
                <button onClick= {()=>{console.log('inline event called')}}> button 1</button>&nbsp;
                <button onClick={this.handleClick}>Button 2</button>
            </div>
        )
    }
}
