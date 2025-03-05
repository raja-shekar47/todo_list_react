import React from "react";
import { useState } from "react";

const AddTodoList = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState(""); // ✅ Correct useState

  const addNewTask = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!newTask.trim()) return; // Prevent empty tasks

    const newTaskList = {
      id: taskList.length + 1,
      task: newTask,
      checked: false,
    };

    setTaskList([...taskList, newTaskList]); // Update task list
    setNewTask(""); // Clear input field
  };

  return (
    <div className="bg-blue-700 mb-8 my-5 p-3 py-4">
      <form action="" className="bg-sky-500/100" onSubmit={addNewTask}>
        <label className="text-white" htmlFor="addItem">
          Add Item{" "}
        </label>
        <input
          type="text"
          autoFocus
          id="addItem"
          placeholder="Add Item"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="text-white" type="submit" aria-label="add item">
          Add New List
        </button>
      </form>
    </div>
  );
};

export default AddTodoList;
