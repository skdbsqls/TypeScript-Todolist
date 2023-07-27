import React, { SetStateAction } from "react";
import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
  isDone: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, isDone }) => {
  const deleteButton = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleButton = (id: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <div>{todo.title}</div>
              <div>{todo.content}</div>
              <button onClick={() => toggleButton(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => deleteButton(todo.id)}>삭제</button>
            </div>
          );
        })}
    </>
  );
};

export default TodoList;
