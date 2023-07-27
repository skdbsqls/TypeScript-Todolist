import React, { SetStateAction, useState } from "react";
import shortid from "shortid";
import { Todo } from "../App";

interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}

const Input: React.FC<InputProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const addButton = (): void => {
    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      제목 : <input value={title} onChange={onChangeTitle} />
      내용 : <input value={content} onChange={onChangeContent} />
      <button onClick={addButton}>추가</button>
    </div>
  );
};

export default Input;
