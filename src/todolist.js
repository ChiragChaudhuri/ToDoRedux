import React  from 'react';
import Todoitem from "./todoitem";
import {connect} from 'react-redux';
const mapStateToProps=(state)=>{return({todos:state.todos});}
class Todolist extends React.Component
{
    render()
    {
        return(
            <div>{
                this.props.todos.map((element,index)=>
                <Todoitem index={index} element={element}/>
                )
            }
            </div>
        );
    }
}
export default connect(mapStateToProps,null)(Todolist);
