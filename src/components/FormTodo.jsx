import React, { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [value, setValue] = useState("");
  // (C-1)
  const handleSubmit = (e) => {
    e.preventDefault(); // (D)
    // (C-2)
    handleAddItem({
      done: false,
      id: (+new Date()).toString(), //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
      value,
    });
    setValue(""); // (B)
  };
  return (
    <form onSubmit={handleSubmit}>
      {/*(A)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(A-1)*/}
          <input
            type="text"
            className="text"
            value={value}
            placeholder="Add Todo..." // A-3
            onChange={(e) => setValue(e.target.value)}
          />
          {/*(A-2)*/}
          <button className="button ADD" disabled={value ? "" : "disabled"}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;

/* 
A)Add input and button elements
A-1)Then the add the ""value" state to assign it to the input
A-2) We use the ternary operator to validate the button. So, if
"value" has no value it is disabled, otherwise it is enabled
A-3) to give the user some indication as what to do in this field

B)clear the "value" state with setValue. Then I'm going to enter 'React.useState', and I will initialize 
it as an empty string. Next, let's go ahead and write our form. I'm going to go ahead and enter my 
tags here. And inside of my form, I will add an 'input' element. 

C-1)When that form is submitted, we handle that event with 
'handleSubmit', which is the function we just wrote.

D)By default, the behavior is to reload the page, and we don't 
want that to take place. So, we will simply enter, prevent that 
by entering 'preventDefault();


*/
