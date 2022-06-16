function ItemToDo({ todo, index, remove }) {
  const removeItem = () => {
    remove(index);
    console.log("clicked Delete");
  };
  return (
    <div>
      <article className="todo-item">
        {todo.text}
        <button className="delete-button" onClick={removeItem}>
          Delete
        </button>
      </article>
    </div>
  );
}
