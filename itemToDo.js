function ItemToDo({ edit, todo, index, remove, update, save, cancel }) {
  const [inputValue, setInputValue] = React.useState("");
  const removeItem = () => {
    remove(index);
    console.log("clicked Delete");
  };

  const editItem = () => {
    update(index);
    setInputValue(todo.text);
    console.log("edit-item clicked Edit");
    console.log("edit-item clicked Edit", inputValue);
  };

  const saveItem = () => {
    save(index, inputValue);
    console.log("itemTODO-input", inputValue);
  };

  const cancelSave = () => {
    cancel();
  };
  return (
    <div>
      <article className="todo-item">
        {edit === index ? (
          <>
            <input
              className="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button className="edit-button" onClick={cancelSave}>
              Cancel
            </button>
            <button className="save-button" onClick={saveItem}>
              Save
            </button>
          </>
        ) : (
          <>
            <p className="todo-item-text">{todo.text}</p>
            <button className="edit-button" onClick={editItem}>
              Edit
            </button>
            <button className="delete-button" onClick={removeItem}>
              Delete
            </button>
          </>
        )}
      </article>
    </div>
  );
}
