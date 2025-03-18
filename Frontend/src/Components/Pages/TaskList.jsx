import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import { Link } from 'react-router-dom';

function TaskList () {
    const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div className='container'> 
      <h1>Task Manager</h1>
      <Link to='/add'>+ Add Task</Link>
      <ul>
        {tasks.map((task) => (
            <li key={task.id}>
                {task.title} - {task.status}
                <button onClick={() => removeTask(task.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
