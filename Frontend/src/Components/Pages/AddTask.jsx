import { useState } from 'react';
import { addTask } from '../Services/TaskServices';
import { useNavigate } from 'react-router-dom';

function AddTask () {
    const [title, setTitle ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask({ title, status: 'pending'});
        navigate('/');
    };

  return (
    <div className='container'>
      <h1>Add New Task </h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='Task title' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}

export default AddTask;
