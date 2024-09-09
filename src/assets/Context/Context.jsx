import React, { useContext, useState, createContext } from "react";

// Create the Auth context
const Auth = createContext(null);

// AuthProvider component
const AuthProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    console.log(todos);

    // Function to add a new todo
    const addTodo = (id, title) => {
        const newTodo = {
            id,
            title
        };
        setTodos([...todos, newTodo]);
    };

    // Function to remove a todo by id
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Auth.Provider value={{ todos,addTodo,removeTodo }}>
            {children}
        </Auth.Provider>
    );
};

// Custom hook to use the Auth context
export const useAuth = () => {
    return useContext(Auth);
};

export default AuthProvider