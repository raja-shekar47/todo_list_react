import React from "react";
export const TaskList = ({ taskList, setTaskList }) => {

  // update the task in checkbox
  const handleCheck = (id) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTaskList(updatedTaskList);
  };

  const handleDelete = (id) => {
    const deleteTask = taskList.filter((task) => task.id !== id);
    setTaskList(deleteTask);
  };

  return (
    <div>
      {taskList.map((item) => (
        <ul key={item.id}>
          <li className="flex items-center gap-3 px-2">
            <h1>{item.task}</h1>
            <input
              onClick={() => handleCheck(item.id)}
              type="checkbox"
              checked={item.checked}
            ></input>
            <button
              onClick={() => handleDelete(item.id)}
              type="button"
              class="ms-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};
