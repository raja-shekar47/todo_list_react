import React from "react";
import { useState } from "react";

import { Footer } from "./todoComponents/Footer";
import { Header } from "./todoComponents/Header";
import { TaskList } from "./todoComponents/TaskList";
import AddTodoList from "./todoComponents/AddTodoList";
import SearchBar from "../Components/SearchBar";

export const TodoPageRenderer = () => {
  const [searchText, setSearchText] = useState("");

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

  const filteredTask = taskList.filter((task) =>
    task.task.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="w-[50%] mx-auto my-5 ">
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <AddTodoList taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={filteredTask} setTaskList={setTaskList} />
      <Footer />
    </div>
  );
};
