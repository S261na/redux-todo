import React from 'react';
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import styles from '../index.module.css'

const TodoList = () => {
    const {todos} = useSelector(state => state.todos)
   console.log(todos);

    return (
        <div> 
           <ul className={styles.list}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
           </ul>
        </div>
    );
};

export default TodoList;
//  принимает функцию который содержит весь стор, способна приниимать весь стор