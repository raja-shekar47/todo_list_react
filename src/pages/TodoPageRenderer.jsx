import React from "react";
import { useState } from "react";

import { Footer } from "./todoComponents/Footer";
import { Header } from "./todoComponents/Header";
import { TaskList } from "./todoComponents/TaskList";
import AddTodoList from "./todoComponents/AddTodoList";

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
    <div className="w-[50%] mx-auto my-5 ">
      <Header />
      <AddTodoList taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <Footer/>
    </div>
  );
};
