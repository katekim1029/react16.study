import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.todo !== this.props.todo;
    }

    render() {
        const { id, checked, text, onCheck, onRemove } = this.props;
        return (
            <div 
                className={`TodoItem ${checked && 'active'}`}
                onClick={() => onCheck(id)}
            >
                <div className="check">&#10004;</div>
                <div className="text">{text}</div>
                <div 
                    className="remove"
                    onClick={e => {
                        e.stopPropagation();
                        onRemove(id);
                    }}
                >
                    [지우기]
                </div>
            </div>
        );
    }
}
/*
const TodoItem = ({ id, checked, text, onCheck, onRemove }) => (
    <div 
        className={`TodoItem ${checked && 'active'}`}
        onClick={() => onCheck(id)}
    >
        <div className="check">&#10004;</div>
        <div className="text">{text}</div>
        <div 
            className="remove"
            onClick={e => {
                e.stopPropagation();
                onRemove(id);
            }}
        >
            [지우기]
        </div>
    </div>
);
*/
export default TodoItem;
