import { createStore } from 'redux';
import ADD_TO_LIST from './Reducers/todo';
import DELETE from './Reducers/todo';
const create_redux_store=()=>
{
    createStore(ADD_TO_LIST);
    createStore(DELETE);
}
//create_redux_store=()=>createStore(DELETE);
export default create_redux_store;
