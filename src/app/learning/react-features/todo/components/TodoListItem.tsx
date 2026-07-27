import type { Todo } from "../Types";

type Props = {
  todo: Todo;
  onToggle : (id: string) => void; 
  onDelete : (id: string) => void; 
};

export const TodoListItem = ({ todo, onToggle, onDelete }: Props) => {  
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
	  <span style={{ textDecoration: todo.completed ? 'line-through' :'none' }}>{todo.title}</span>
	  <button onClick={() => onDelete(todo.id)}>X</button>	  
    </div>
  );
};
