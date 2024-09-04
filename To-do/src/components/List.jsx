import { useState } from "react";
import './List'

function List(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function upTask(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function downTask(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className="body">
        <h3>To-Do List</h3>
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
            <button className="add" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => <li key={index}><span className="text">{task}</span>
            <button className="delete" onClick={() => deleteTask(index)}>X</button>
            <button className="move" onClick={() => upTask(index)}>Up</button>
            <button className="move" onClick={() => downTask(index)}>Down</button>
            </li>)}
        </ol>
        </div>
    );

}
export default List