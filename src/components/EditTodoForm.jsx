import React,{useState} from 'react'
import {toast} from 'sonner';

export const EditTodoForm =({editTodo,task,cancelUpdate,todo})=> {

    const [value,setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) {
            toast.error("Please enter the task")
            return
        }else if (todo.some(todo => todo.task === value)) {
            toast.error("Task already exists.");
            return;
        } else{
         editTodo(task.id,value)
         toast.success("Updated")
         setValue("")   
        }
    }

    return(
        <form action="" className="EditTodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input"
             placeholder="Update Task"
             value={value}
             onChange={(e)=> setValue(e.target.value)}
             />
             <button type="submit" className="todo-btn">Update</button>
             <button className="cancel-btn"
             onClick={()=> console.log(cancelUpdate(task.id))}
             >X</button>
        </form>
    )
}
