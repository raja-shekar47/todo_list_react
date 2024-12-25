import React from "react";
import { useState, useEffect } from "react";

import { AddTodoList } from "./todoComponents/AddTodoList";
import { Footer } from "./todoComponents/Footer";
import { Header } from "./todoComponents/Header";
import { Todo } from "./todoComponents/Todo";
import { SearchTask } from "./todoComponents/SearchTask";

export const TodoPageRenderer = (prop) => {
  const API_URL = "http://localhost:3500/tasklist";

  // const [taskList, setTaskList] = useState(() => JSON.parse(localStorage.getItem("taskList")) || []);
  // const [taskList, setTaskList] = useState([]);
  const [isFetchError, isSetFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
  useEffect(() => {
    // const fetchItem = async () => {
    //   try {
    //     const responce = await fetch(API_URL);
    //     if (!responce.ok) throw Error("Data not Receved");
    //     const apiListItems = await responce.json();
    //     setTaskList(apiListItems);
    //     console.log("api task", apiListItems);
    //     isSetFetchError(null);
    //   } catch (err) {
    //     isSetFetchError(err.message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // setTimeout(() => {
    //   (async () => await fetchItem())();
    // }, 3000);
  }, []);
  console.log(taskList, "takslist");

  const handleOnChange = (id) => {
    const updatedTaskList = taskList.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setTaskList(updatedTaskList);
    // localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  const handleDelete = (id) => {
    const deleteTask = taskList.filter((item) => {
      return item.id !== id;
    });
    //   const deleteTask = taskList.filter((item) => item.id !== id)
    setTaskList(deleteTask);
    // localStorage.setItem("taskList", JSON.stringify(deleteTask));
  };

  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // let randomId = Math.random(100);
    const listId = taskList.length ? taskList[taskList.length - 1].id + 1 : 1;
    const updatedList = [
      ...taskList,
      { id: listId, checked: false, task: newItem },
    ];
    setTaskList(updatedList);
    // localStorage.setItem("taskList", JSON.stringify(updatedList));
  };

  const [Searchlist, setSearchlist] = useState();

  return (
    <div>
      {" "}
      <Header />
      <AddTodoList
        newItem={newItem}
        setNewItem={setNewItem}
        onSubmit={handleSubmit}
      />
      <SearchTask Searchlist={Searchlist} setSearchlist={setSearchlist} />
      {isLoading && <h2>Loading ...</h2>}
      {!isLoading && !isFetchError && (
        <Todo
          // taskList={taskList.filter((item) => item.task.includes(SearchTask))}
          taskList={taskList}
          setTaskList={setTaskList}
          handleOnChange={handleOnChange}
          handleDelete={handleDelete}
          isFetchError={isFetchError}
        />
      )}
      {isFetchError && <p className="text-red-700">Error : {isFetchError}</p>}
      <Footer />
    </div>
  );
};
