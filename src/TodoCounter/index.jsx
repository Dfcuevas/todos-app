import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos, equalTotalCompleted } =
    React.useContext(TodoContext);
  return (
    <>
      {equalTotalCompleted ? (
        <h1 className="congratz">
          Felicidades!! has completado todas las tareas pendientes
        </h1>
      ) : (
        <h1 className="title-todo">
          Has completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODOs
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
