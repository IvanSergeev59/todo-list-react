import React from 'react'

import './todo-add-item-block.css'

const TodoAddItemBlock = ({addItem}) => {
   
   
    return (
        <React.Fragment>
            <input type="text"
            placeholder="type to add"
            className="todo-add-item-type"
            id="type-to-add"/>
            <button
            className="btn btn-outline-secondary"
            onClick={() => addItem(document.getElementById('type-to-add').value)}>Добавить</button>
        </React.Fragment>
    )
}

export default TodoAddItemBlock