import React from "react";

import { useState, useEffect } from "react";
import { AddTodoList } from "./todoComponents/AddTodoList";
import { Footer } from "./todoComponents/Footer";
import { Header } from "./todoComponents/Header";
import { Todo } from "./todoComponents/Todo";
import { SearchTask } from "./todoComponents/SearchTask";

export const TodoPageRenderer = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      task: "Programming React",
      checked: true,
    },
    {
      id: 2,
      task: "Play Cricket",
      checked: false,
    },
    {
      id: 3,
      task: "Swimming",
      checked: true,
    },
  ]);
  return (
    <div>
      {taskList.map((item) => (   
        <ul key={item.id}>
          <li className="d-flex">
            <h4>{item.task}</h4>
            <input type="checkbox" checked={item.checked}></input>
            <button>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
};
