import React from 'react';
import { store } from './index';
class Todoitem extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.element}<button
                    onClick={() => { store.dispatch({ type: 'DELETE', payload: this.props.index }) }}>
                    Delete
                    </button>
                </li>
            </div>
        );
    }
}
export default Todoitem;
