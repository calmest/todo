import React from 'react';

export default function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}