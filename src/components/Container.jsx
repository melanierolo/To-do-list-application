import React from "react";
import { useState } from "react";

import { Home } from "./Home";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

const Container = () => {
  const [list, setList] = useState([]); // (B-1)

  // (A-2)
  const handleAddItem = (addItem) => {
    setList([...list, addItem]); // (B-2)
  };
  return (
    <div>
      Container!
      <Home />
      {/*(A-1)*/}
      <FormTodo handleAddItem={handleAddItem} />
      {/*(C)*/}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;

/* 
B-1) We are going to create the list state, which will be used to store the data.
C)We add the list and setList attributes in the TaskList component, and pass the state to it.


*/
