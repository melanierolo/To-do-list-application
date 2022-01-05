import React from "react";
import { Home } from "./Home";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";

const container = () => {
  return (
    <div>
      Container!
      <Home />
      <FormTodo />
      <TaskList />
    </div>
  );
};

export default container;
