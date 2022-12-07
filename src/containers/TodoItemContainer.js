import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import {
  changeTodoAsync,
  removeTodoAsync,
  toggleTodoAsync,
} from '../modules/todos';

function TodoItemContainer({ todoItem }) {
  const access_token = localStorage.getItem('loginToken');
  const { id, todo, isCompleted } = todoItem;

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [todoText, setTodoText] = useState(todo);

  const onEditMode = () => {
    setIsEdit(true);
  };
  const onEditCancel = () => {
    setIsEdit(false);
  };

  const onToggle = (event) => {
    const currentId = Number(event.currentTarget.parentNode.id);

    if (currentId) {
      dispatch(toggleTodoAsync(access_token, currentId, todo, isCompleted));
    }
  };

  const onRemove = async (event) => {
    const currentId = Number(event.currentTarget.parentNode.parentNode.id);

    if (currentId) {
      const isRemove = window.confirm('정말 삭제 하시겠습니까?');
      isRemove && dispatch(removeTodoAsync(access_token, currentId));
    }
  };

  const [editInput, setEditInput] = useState(todo);
  const onEditInputChange = (event) => {
    setEditInput(event.target.value);
  };

  const onEdit = async (event) => {
    let currentId = event.currentTarget.parentNode.parentNode.parentNode.id;
    currentId = Number(currentId);

    const callback = (data) => {
      setIsEdit(false);
      console.log('콜백 시점 : ', data.todo);
      setTodoText(data.todo);
    };

    if (editInput === '') {
      alert('내용을 입력해 주세요');
    }
    if (currentId) {
      dispatch(
        changeTodoAsync(
          access_token,
          currentId,
          editInput,
          isCompleted,
          callback,
        ),
      );
      console.log('action 요청');
    }
  };

  return (
    <TodoItem
      todo={todoText}
      todoId={id}
      isCompleted={isCompleted}
      onToggle={onToggle}
      isEdit={isEdit}
      onEditMode={onEditMode}
      onEditCancel={onEditCancel}
      onRemove={onRemove}
      onEditInputChange={onEditInputChange}
      onEdit={onEdit}
      editInput={editInput}
    />
  );
}

export default TodoItemContainer;
