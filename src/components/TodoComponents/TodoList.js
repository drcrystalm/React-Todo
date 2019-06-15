import React from "react"
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div className='List'>
            {props.todos.map(todo => {
                return <Todo todo={todo} toggleItem={props.toggleItem} />
            })}
        </div>
    )
}

export default TodoList
