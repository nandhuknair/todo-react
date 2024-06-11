import React,{useState} from 'react'
import {toast} from 'sonner';

export const TodoForm =({addTodo,task})=> {
    const [value,setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        if(!value){
            toast.error("Please enter the task")
            return
        }else if (task.some(todo => todo.task === value)) {
            toast.error("Task already exists.");
            return;
        }
        else{
        addTodo(value)
        toast.success("Saved")
        setValue("")  
        }
        
    }

    return(
        <form action="" className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input"
             placeholder="What is the task today ?"
             value={value}
             onChange={(e)=> setValue(e.target.value)}
             />
             <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}

