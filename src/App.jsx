import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolist from './Components/Todolist';
import Card from './Components/Card';
import Statusfilter from './Components/Statusfilter';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]); // State to store todos
  const [editTodo, setEditTodo] = useState(null); // State to store the todo being edited
  const [filter, setFilter] = useState('All'); // State to store the filter

  // Function to add todo to the list
  const addTodo = (name, description, id) => {
    const newTodo = { id, name, description, status: 'Not Completed' };
    setTodos([...todos, newTodo]);
  };

  // Function to update a todo
  const updateTodo = (id, name, description) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, name, description } : todo
    );
    setTodos(updatedTodos);
    setEditTodo(null); // Clear the edit state
  };

  // Function to delete todo from the list
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to handle the edit button click
  const handleEdit = (todo) => {
    setEditTodo(todo); // Set the todo to be edited
  };

  // Function to update the status of a todo
  const updateStatus = (id, status) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, status } : todo
    );
    setTodos(updatedTodos);
  };

  // Filter todos based on the selected status
  const filteredTodos = todos.filter(todo => 
    filter === 'All' || todo.status === filter
  );

  return (
    <div className="container mt-5">
      {/* Render My Todo List centered at the top */}
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h4 style={{ color: 'green' }}>My Todo List</h4>
        </div>
      </div>

      {/* Render Todolist component with todo name, todo description, and add/update todo button */}
      <div className="row justify-content-center">
        <Todolist
          addTodo={addTodo}
          editTodo={editTodo}
          updateTodo={updateTodo}
        />
      </div>

      {/* Render Statusfilter component */}
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 text-center">
          <Statusfilter setFilter={setFilter} />
        </div>
      </div>

      {/* Render Cards for each todo */}
      <div className="card-container">
        {filteredTodos.map(todo => (
          <div key={todo.id} className="col-md-6">
            <Card
              id={todo.id}
              name={todo.name}
              description={todo.description}
              status={todo.status}
              onDelete={handleDelete}
              onEdit={handleEdit}
              updateStatus={updateStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
