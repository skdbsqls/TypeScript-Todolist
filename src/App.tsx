import "./App.css";
import { useState } from "react";
import shortid from "shortid";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: shortid.generate(),
      title: "배고파요 ",
      content: "집에 갈래요",
      isDone: false,
    },
  ]);

  return (
    <>
      <h1>내배캠 금쪽이의 투두리스트</h1>
      <Input todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
    </>
  );
}

export default App;
