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
  const removeTodo = (e) => {
    console.log(e.target.getAttribute("id"));
    var index = Number(
      e.target.id
    ); /* That will give us the index position.One that wew want to remove*/
    console.log(index);
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
          <div key={i} id={i}>
            <article className="todo">
              {todo.text}
              <button onClick={removeTodo}>Delete</button>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
