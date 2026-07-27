import { FilteredTodo } from "./components/FilteredTodo";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hook/useTodos";

const Todo = () => {
  const { addTodo, todos, toggleTodo, deleteTodo, filter, setFilter } =
    useTodos();
  return (
    <>
      <h3>Todo's</h3>
      <TodoInput onAdd={addTodo} />
      <FilteredTodo onChange={setFilter} activeFilter={filter} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
};

export default Todo;
