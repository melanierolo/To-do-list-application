import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  // (C)
  const { todos, setTodos } = props;

  const addTodo = (text) => {
    const newTodos = [
      <div className="todos"></div>,
      { text: text, isCompleted: false },
    ];
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      Task List!!
      <Checkbox />
    </div>
  );
};

export default TaskList;
