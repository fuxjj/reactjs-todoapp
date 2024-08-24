import { useState } from "react"

export default function todoInput(props) {
    const {handleAddTodo, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value) //USES CURLY BRACKET
            }}
            placeholder="Enter an item.." />

            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}