import {Component} from 'react';

export class Second extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>HEllo {this.props.firstname}</h2>
            </div>
        )
    }
}