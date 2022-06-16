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

  return (
    <>
      {todos.map((todo, i) => (
        <div key={i}>
          <article>{todo.text} </article>
          <article>{todo.status} </article>
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
