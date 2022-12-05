import React from 'react';
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineEdit,
} from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import EditTodo from './EditTodo';

function TodoItem({
  todo,
  todoId,
  isCompleted,
  onToggle,
  isEdit,
  onEditMode,
  onRemove,
  onEditCancel,
  onEditInputChange,
  onEdit,
  editInput,
}) {
  return (
    <li className="todo-item round-box" id={todoId}>
      <button className="check" onClick={onToggle}>
        {isCompleted ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      </button>
      {isEdit ? (
        <EditTodo
          todoText={todo}
          isCompleted={isCompleted}
          onEdit={onEdit}
          onEditInputChange={onEditInputChange}
          editInput={editInput}
          onEditCancel={onEditCancel}
        />
      ) : (
        // <EditTodoContainer
        //   onEditCancel={onEditCancel}
        //   setIsEdit={setIsEdit}
        // />
        <>
          <p>{todo}</p>
          <div className="button-wrap">
            <button onClick={onEditMode}>
              <AiOutlineEdit />
            </button>
            <button onClick={onRemove}>
              <BiTrash />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
