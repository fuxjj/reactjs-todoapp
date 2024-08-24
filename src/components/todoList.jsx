import React from 'react';
import TodoCard from './todoCard.jsx';

export default function todoList(props) {
    const {todos} = props;

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
             )
        })}
    </ul>
  )
}
