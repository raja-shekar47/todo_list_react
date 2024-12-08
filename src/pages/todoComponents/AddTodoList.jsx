import React from "react";

export const AddTodoList = ({ newItem, setNewItem, onSubmit }) => {
  return (
    <div className="bg-blue-700 mb-8 my-5 p-3 py-4">
      <form action="" className="bg-sky-500/100" onSubmit={onsubmit}>
        <label className="text-white" htmlFor="addItem">
          Add Item{" "}
        </label>
        <input
          type="text"
          autoFocus
          id="addItem"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={onSubmit}
          className="text-white"
          type="submit"
          arie-label="add item"
        >
          Add New List
        </button>
      </form>
    </div>
  );
};
