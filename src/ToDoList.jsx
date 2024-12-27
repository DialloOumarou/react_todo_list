import React,{useState} from "react";
function ToDoList(){

    const [tasks,setTask]=useState(['eat','shower','walk']);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }


    function addTask(){

        if(newTask.trim() !== ""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }

      
    }


    function deleteTask(index){
        const updatedTask = tasks.filter((element,i)=> i !==index);
        setTask(updatedTask);
    }

    function mouveTaskUp(index){
        if(index > 0){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index-1]] =
            [updatedTask[index-1],updatedTask[index]];

            setTask(updatedTask);
        }
    }

    function mouveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTask=[...tasks];
            [updatedTask[index],updatedTask[index+1]] =
            [updatedTask[index+1],updatedTask[index]];

            setTask(updatedTask);
        }
    }

    return(
        <div className="to_do_list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text"
                placeholder="enter a task..."
                value={newTask}
                onChange={handleInputChange} />
                <button
                className="add_btn"
                onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                   <span className="text">{task}</span>
                   <button className="delete_btn"
                   onClick={()=>deleteTask(index)}>
                        Delete
                    </button>

                    <button className="mouve_btn"
                   onClick={()=> mouveTaskUp(index)}>
                        👆
                    </button>

                    <button className="mouve_btn"
                   onClick={()=> mouveTaskDown(index)}>
                        👇
                    </button>
                </li>)}
            </ol>


        </div>
    );
}

export default ToDoList