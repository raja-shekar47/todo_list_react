export const Todo = ({
  taskList,
  handleOnChange,
  handleDelete,
  isFetchError,
}) => {
  return (
    <div>
      {taskList.length ? (
        <div className="w-50">
          {taskList.map((item) => {
            return (
              <ul key={item.id}>
                <li className="flex gap-3 rounded-lg shadow ms-2 text-lg font-medium text-gray-900 dark:text-gray-300 items-center">
                  <input
                    onClick={() => handleOnChange(item.id)}
                    type="checkbox"
                    checked={item.checked}
                  />
                  <label>{item.task}</label>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            );
          })}

        </div>
      ) : (
        <div className="text-e11d48">Task List is Empty</div>
      )}
    </div>
  );
};
