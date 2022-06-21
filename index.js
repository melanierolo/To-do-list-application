function App() {
  const [edit, setEdit] = React.useState(false);
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
      status: "completed",
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
      status: "Progress",
    },
    {
      text: "build todo app",
      isCompleted: false,
      status: "Review",
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    console.log(newTodos);
    setTodos(newTodos);
  };
  const removeToDo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    console.log(temp);
    setTodos(temp);
  };
  /*Edit */
  const editItemTodo = (index) => {
    setEdit(index);
    console.log(index);
    console.log("index number", edit);
  };

  const saveEditItem = (index, text) => {
    console.log("todo-list", todos);
    console.log("editSave-index", index);
    console.log("editSave-text", text);
    console.log("todos-index", todos[index].text);
    /*update object's text property */
    todos[index].text = text;
    setEdit(false);
  };

  const cancelEditItem = () => {
    setEdit(false);
  };

  return (
    <>
      <section className="title">
        <h1>To-Do List</h1>
        <TodoForm addTodo={addTodo} />
      </section>
      <section className="todos">
        {todos.map((todo, i) => (
          <ItemToDo
            key={i}
            index={i}
            todo={todo}
            edit={edit}
            remove={removeToDo}
            update={editItemTodo}
            save={saveEditItem}
            cancel={cancelEditItem}
          />
        ))}
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
