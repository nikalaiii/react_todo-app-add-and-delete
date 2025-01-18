import classNames from 'classnames';
import { Todo } from '../types/Todo';

interface Props {
  todo: Todo;
  onDelete: () => void;
  isDeleting: boolean;
  handleFocus: () => void;
}

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  isDeleting,
  handleFocus,
}) => {
  return (
    <div
      data-cy="Todo"
      className={classNames(todo.completed ? 'todo completed' : 'todo')}
      key={todo.id}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="todo__status-label" htmlFor={`todo-status-${todo.id}`}>
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          id={`todo-status-${todo.id}`}
          defaultChecked={todo.completed}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => {
          onDelete();
          handleFocus();
        }}
      >
        ×
      </button>

      <div
        data-cy="TodoLoader"
        className={classNames(
          isDeleting ? 'modal overlay is-active' : 'modal overlay',
        )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
