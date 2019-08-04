import React from 'react';
import {store} from './index';
class ToDoInput extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={text:''}
    }
    handleChange=(event)=>{this.setState({text:event.target.value})}
    render(){
        return(
            <div>
                <input type="text"
                value={this.state.text}
                onChange={this.handleChange} 
                placeholder='Enter your choice'>
                </input>
                <button 
                onClick={()=>{
                    console.log(this.state.text)
                    store.dispatch({type:"ADD_TO_LIST",payload:this.state.text})
                    this.setState({text:''})}}
                disabled={this.props.items.length<1}>
                    Add to List
                </button>
            </div>
        );
    }
}
export default ToDoInput;