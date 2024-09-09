import React from "react";
import { useAuth } from "../assets/Context/Context";
import Index from "../Pages/Index";

function Todoitem() {
  const { todos, removeTodo } = useAuth(); // Destructure todos and removeTodo from the context

  const handleClick = (id) => {
    removeTodo(id); // Call removeTodo with the todo's id
  };

  return (
    <ul className="bg-slate-200 shadow-sm shadow-black flex flex-col md:w-[36vw] justify-center">
      {todos.map((todo,index) => (
        <li
          key={todo.id}
          className="text-xl mt-5 px-4 pb-4 border-b-2 border-slate-300 flex items-center justify-between"
        >
          <span className="font-medium text-blue-500">{index +1}</span>
          <span className="font-medium text-xl">{todo.title}</span>
          <span>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded"
              onClick={() => handleClick(todo.id)} // Pass todo.id to handleClick
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Todoitem;
