import React from 'react';
import bgImg from '../assets/Images/mountain.jpg';
import TodoInput from '../Components/TodoInput';
import TodoList from '../Components/TodoList';

function Index() {
  return (
    <div className="md:h-[35vh] h-[25vh] bg-cover bg-center border"
    style={{
        backgroundImage: `linear-gradient(to right, rgba(175, 71, 210,0.3), rgba(63, 162, 246,0.8)), url(${bgImg})`,
    } }>
        <h1 className='text-white text-4xl text-center mt-16'>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default Index;

