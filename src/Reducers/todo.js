const initialState={
    todos:[]
};
const changeTodo = (state = initialState,action)=>{
    switch(action.type)
    {
        case "ADD_TO_LIST":
           return{
               ...state,
               todos:[...state.todos,action.payload.value]
           };
        case "DELETE":
            var left=state.todos.slice(0,action.payload);
            var right=state.todos.slice(action.payload+1);
            console.log(action.payload);
            return{todos:left.concat(right)}
        default:
            return state;
    }
}
export default changeTodo  ;     