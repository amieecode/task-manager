import { createContext, useState, useEffect } from 'react';
import { getTasks, addTask, deleteTask } from '../Services/TaskServices';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) =>{
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const addNewTask = async(title) => {
        await addTask({ title, status: "pending"});
        loadTasks();
    };

    const removeTask = async(id) => {
        await deleteTask(id);
        loadTasks();
    };

    return(
        <TaskContext.Provider value={{ tasks, addNewTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
}