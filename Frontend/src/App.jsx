import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask from './Components/Pages/AddTask';
import TaskList from './Components/Pages/TaskList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </Router>
  )
}

export default App
