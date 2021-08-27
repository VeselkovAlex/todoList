import Todo from "../Todo/Todo";

const MapTodo = ({ todos, setTodos }) => {
  return todos.map((item) => (
    <Todo todos={todos} setTodos={setTodos} todoName={item} />
  ));
};

export default MapTodo;
