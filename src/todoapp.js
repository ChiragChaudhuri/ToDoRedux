import React from 'react'
import ToDoInput from './todoinput';
import Todolist from './todolist';
/*const mapStateToProps=(state)=>{
    return{
        todos:state.todos,
    }
}*/
class  Todoapp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            item:''
       }
    }
    render(){
        return(<div>
    <ToDoInput/>
    <Todolist todos={this.props.todos}/> 
    </div>);
    /*
    change=(event)=>{this.newItem(event.target.value)}
    
    newItem=(input)=>{
        this.setState(
            {item:input
            })
        }
    addItem=()=>{
        let newArray=this.props.todos.concat(this.props.item);
        this.setState({
            item:''
            })
    }
     remove=(id)=>{
        let newArray=this.props.todos;
        let left=newArray.slice(0,id);
        let right=newArray.slice(id+1);
        this.setState({
            list: left.concat(right)
        })
    }
    render(){
        console.log(this.props.todos);
        return(
            <div>
            <Todoinput handleChange={this.change}
            handleAdd={this.addItem} items={this.props.item}/>
            <Todolist handleRemove={this.remove} listarray={this.props.item}/>
                        </div>
        );
        */
    }
}
export default Todoapp;