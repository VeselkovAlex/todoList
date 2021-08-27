import { useState } from "react";
import s from "./InputTodo.module.css";

const InputTodo = ({ setTodos, todos }) => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([...todos, value]);
      setValue("");
    }
  };

  return (
    <div className={s.container}>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Введите текст..."
          onKeyDown={onKeyPress}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setTodos([...todos, value]);
            setValue("");
          }}
        >
          Сохранить
        </button>
        <button onClick={() => setTodos([])}>Очистить</button>
      </div>
    </div>
  );
};

export default InputTodo;
