import type { Todo } from "../Types";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onDelete={onDelete}
            
          />
        );
      })}
    </>
  );
};
