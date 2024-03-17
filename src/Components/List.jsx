import { useState } from "react";

function List(){
    const [Tsk, setTsk]=useState([]);
    const [newTask, setnewTask]=useState("");
    function handletask(event)
    {
        setnewTask(event.target.value);
    }
    function addNewTask()
    {
        if(newTask=="")
        {
            return;
        }
        
        setTsk(()=>[...Tsk, newTask.trim()]);
        console.log(newTask.trim());
        setnewTask("");
    }
    function deleteTask(index)
    {
        const updatedTask=Tsk.filter((_,i)=>i!==index);
        setTsk(updatedTask);
    }
    function moveup(index)
    {
        if(index>0)
        {
            const updatedTask=[...Tsk];
            [updatedTask[index], updatedTask[index-1]]=[updatedTask[index-1], updatedTask[index]];
            setTsk(updatedTask);
        }
    }
    function movedown(index)
    {
        if(index<Tsk.length-1)
        {
            const updatedTask=[...Tsk];
            [updatedTask[index], updatedTask[index+1]]=[updatedTask[index+1], updatedTask[index]];
            setTsk(updatedTask);
        }
    }
    return(
        <>
        <div className="todolist">
            <h1>To-Do-List</h1>
            
            <input className="inputfield" type="text" placeholder='Enter New Task...' id="txt" onChange={handletask} value={newTask}/>
            <button className="add-button" onClick={addNewTask}>Add</button>
            </div>
            <div className="taskdiv">
            <ul className="unordered_list">
                {Tsk.map((t, index)=>
                    <li key={index} className="list_itme">
                        <span className="spantext">{t}</span>
                        <button onClick={()=>deleteTask(index)} className="delete-button">Delete</button>
                        <button className="move-button" onClick={()=>moveup(index)}>👆🏽</button>
                        <button className="move-button"onClick={()=>movedown(index)}>👇🏽</button>
                    </li>
                )}
            </ul>
            </div>
        </>
    )
}

export default List;