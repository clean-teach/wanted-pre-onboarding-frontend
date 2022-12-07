import React from 'react';
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineEdit,
} from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import EditTodo from './EditTodo';
import styled from 'styled-components';

const TodoItemLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .check {
    width: auto;
    padding: 0;
    margin: 0;
    line-height: 0;
    margin-right: 1rem;
    font-size: 1.5rem;
    border-radius: 100%;
  }
  .cont-area {
    width: 100%;
    box-sizing: border-box;
    padding-left: 1.5rem;
    padding-right: 4rem;
    text-align: left;
  }
  .button-wrap {
    display: flex;
    button {
      width: auto;
      padding: 0;
      margin: 0;
      background: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      svg {
        font-size: 1.5rem;
        fill: rgba(0, 0, 0, 1);
      }
      & + button {
        margin-left: 1rem;
      }
    }
  }
  .edit-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      color: #333333;
    }
  }
  &.round-box {
    padding: 1rem;
    border-radius: 0.5rem;
    & + .round-box {
      margin-top: 1rem;
    }
  }
`;

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
    <TodoItemLi className="round-box" id={todoId}>
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
    </TodoItemLi>
  );
}

export default TodoItem;
