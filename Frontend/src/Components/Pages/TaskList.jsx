import { useEffect, useState } from 'react'
import { getTasks, deleteTask } from '../Services/TaskServices'
import { Link } from 'react-router-dom';

function TaskList () {
    const [task, setTask ] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () =>{
        const data = await getTasks();
        setTask(data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

  return (
    <div className='container'> 
      <h1>Task Manager</h1>
      <link to='/add'>+ Add Task</link>
      <ul>
        {task.map((task, index) => (
            <li key={task.id}>
                {task.title} - {task.status}
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
