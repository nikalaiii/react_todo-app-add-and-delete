import { deleteTodo } from "./api/todos";
import { Todo } from "./types/Todo";


export const handleDelete = async (
    todo: Todo,
    setDeleting: React.Dispatch<React.SetStateAction<number[]>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    try {
      setDeleting(prev => [...prev, todo.id]);
      await deleteTodo(todo);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      setError(`Unable to delete a todo: ${error.message || 'Unknown error'}`);
    } finally {
      setDeleting((prev) => prev.filter((id) => id !== todo.id));
    }
  };
  