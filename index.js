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

  const [value, setValue] = React.useState("");

  /*A-2) I wrote  the handleSubmit function(arrow funciton-ES6)*/
  const handleSubmit = (e) => {
    /*By default, the behavior is to reload the page, and we don't want that to take place. 
    So, we will simply enter, prevent that by entering 'preventDefault();'.*/
    e.preventDefault();

    /*Next, we will check the value of the field. And if the '(!value)' is empty, then we will 'return;', meaning do nothing. */
    if (!value) return;
    const newTodos = [...todos, { text: value, isCompleted: false }];
    {
      /* we're going from the old state or the current state to the new state*/
    }
    setTodos(newTodos);
    setValue("");
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
      {/* A-1) We write our form:*/}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={
            value /* the value that we just defined within the state of the application*/
          }
          placeholder="Add Todo..." /*to give the user some indication as what to do in this field  */
          onChange={
            (e) => setValue(e.target.value) /*It will give us the input */
          }
        />
      </form>
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
