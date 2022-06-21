function ItemToDo({ todo, index, remove, update }) {
  const removeItem = () => {
    remove(index);
    console.log("clicked Delete");
  };

  const editItem = () => {
    update(index);
    console.log("clicked Edit");
  };

  return (
    <div>
      <article className="todo-item">
        <p className="todo-item-text">{todo.text}</p>
        <button className="edit-button" onClick={editItem}>
          Edit
        </button>
        <button className="delete-button" onClick={removeItem}>
          Delete
        </button>
      </article>
    </div>
  );
}
