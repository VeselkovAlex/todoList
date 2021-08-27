import s from "./Todo.module.css";

const Todo = ({ todoName, setTodos, todos }) => {
  const removeTodo = () => {
    setTodos(todos.filter((item) => item !== todoName));
  };

  return (
    <div className={s.container}>
      {todoName}
      <button onClick={() => removeTodo()}>Удалить</button>
    </div>
  );
};

export default Todo;
