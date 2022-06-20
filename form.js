function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  /*A-2) I wrote  the handleSubmit function(arrow funciton-ES6)*/
  const handleSubmit = (e) => {
    /*By default, the behavior is to reload the page, and we don't want that to take place. 
    So, we will simply enter, prevent that by entering 'preventDefault();'.*/
    e.preventDefault();

    /*Next, we will check the value of the field. And if the '(!value)' is empty, then we will 'return;', meaning do nothing. */
    if (!value) return;
    addTodo(value); /*this function needs to exist within index.js */
    setValue("");
  };
  return (
    /* A-1) We write our form:*/
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={
          value /* the value that we just defined within the state of the application*/
        }
        placeholder="Add Todo or a task..." /*to give the user some indication as what to do in this field  */
        onChange={
          (e) => setValue(e.target.value) /*It will give us the input */
        }
      />
    </form>
  );
}
