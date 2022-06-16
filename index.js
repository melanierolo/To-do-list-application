function App() {
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

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <section>
        {todos.map((todo, i) => (
          <ItemToDo index={i} todo={todo} remove={removeToDo} />
        ))}
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
