import React,{useState,useEffect} from 'react'
import { TodoForm } from "./TodoForm";
import {Todo} from "./Todo"
import {EditTodoForm} from "./EditTodoForm"
import { v4 as uuidv4 } from 'uuid';
import Shimmer from './Shimmer'


const TodoWrapper =()=> {
    const [todos, setTodos] = useState([])

    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 500);
    },[])


       const addTodo =todo=> {
            setTodos([...todos,{id:uuidv4(),task:todo,
            completed:false,isEditing:false}])
        }

       const toggleComplete =(id)=>{
            setTodos(todos.map(todo=> todo.id === id ? {...todo,completed:!todo.completed} : todo
            ))
       }

       const deleteTodo =(id)=> {
            setTodos(todos.filter(todo=> todo.id !== id))
       }

       const editTodo =(id)=> {
            setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing}:todo))
       }

       const saveTodo = (id, newTask) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
        ));
        }

        const cancelUpdate =(id)=> {
            setTodos(todos.map(todo=>  todo.id === id ? { ...todo, isEditing: false } : todo))
       }

       return (
        <div className="TodoWrapper">
            {loading ? (
                <Shimmer />
            ) : (
                <>
                    <h1>Get things done ~</h1>
                    <TodoForm addTodo={addTodo} task={todos} />
                    {todos.map(todo => (
                        todo.isEditing ? (
                            <EditTodoForm
                                editTodo={saveTodo}
                                todo={todos}
                                key={todo.id}
                                task={todo}
                                cancelUpdate={cancelUpdate}
                            />
                        ) : (
                            <Todo 
                                task={todo}
                                key={todo.id}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        )
                    ))}
                </>
            )}
        </div>
    );
    }       
    
    export default TodoWrapper;
