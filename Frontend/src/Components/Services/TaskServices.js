import axios from 'axios';

const API_URl = "http://127.0.0.1:8000/api/tasks/";

export const getTasks = async () => {
    const response = await axios.get(API_URl);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(API_URl, task);
    return response.data;
};

export const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`${API_URl}${id}/`, updatedTask);
    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URl}${id}/`);
};