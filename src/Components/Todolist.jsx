import React, { useState, useEffect } from 'react';

function Todolist({ addTodo, editTodo, updateTodo }) {
  const [name, setName] = useState(""); // State for todo name
  const [description, setDescription] = useState(""); // State for todo description

  useEffect(() => {
    if (editTodo) {
      setName(editTodo.name);
      setDescription(editTodo.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [editTodo]);

  const handleAddOrUpdateTodo = () => {
    if (editTodo) {
      updateTodo(editTodo.id, name, description);
    } else {
      addTodo(name, description, Date.now());
    }
    setName("");
    setDescription("");
  };

  return (
    <div className="col-md-6">
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="todoName" 
              aria-describedby="todoNameHelp" 
              placeholder="ToDo Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="todoDescription" 
              placeholder="ToDo Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group mb-0">
            <button 
              type="button" 
              className="btn btn-success btn-block" 
              onClick={handleAddOrUpdateTodo} 
            >
              {editTodo ? "Update" : "Add"} Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
