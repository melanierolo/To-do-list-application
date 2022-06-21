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

  const editItemTodo = (index) => {
    console.log(index);
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
            remove={removeToDo}
            update={editItemTodo}
          />
        ))}
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
