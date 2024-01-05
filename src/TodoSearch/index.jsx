import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
    />
  );
}

export { TodoSearch };
