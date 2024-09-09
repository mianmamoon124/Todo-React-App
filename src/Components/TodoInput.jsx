import React, { useState } from 'react';
import { useAuth } from '../assets/Context/Context';

function TodoInput() {
    const { addTodo } = useAuth();  // Correct way to use the context

    const [todo, setTodo] = useState('');
    const [id, setId] = useState(1);
    const [title, setTitle] = useState('');

    const handleClick = () => {
        if (!todo.trim()) {
            alert('Please enter a task!');
            return;
        }

        setId(id => id + 1);  // Incrementing the id correctly
        setTitle(todo.trim());  // Trimming the todo text

        addTodo(id, todo);  // Calling addTodo with updated id and title
        console.log(id, todo);

        // Optional: Clear the input after adding the task
        setTodo('');
    };

    return (
        <div className='flex justify-center md:mt-10'>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder='Enter Task Here'
                className='md:w-[30%] w-screen p-3 shadow shadow-black outline-none'
            />
            <button
                className='bg-custom-blue text-white p-3 shadow-black shadow'
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}

export default TodoInput;
