import { useMemo, useState } from "react";
import type { Filters, Todo } from "../Types";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filters>('ALL');
  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: title,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

//   const updateTodo = (id: string, newTitle: string) => {
//     setTodos((prev) =>
//       prev.map((todo) => id === todo.id ? { ...todo, title: newTitle } : todo)
//     );
//   };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'ACTIVE':
        return todos.filter(t => !t.completed);
      case 'COMPLETED':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return { todos: filteredTodos, addTodo, toggleTodo, deleteTodo, filteredTodos, filter, setFilter };
};

// why did we use .map and not .filter or something else for toggle function
