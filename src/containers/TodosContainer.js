import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Todos from '../components/Todos';
import { getTodosAsync } from '../modules/todos';

function TodosContainer() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => ({
    todos: state.todoReducer.todos,
  }));

  useEffect(() => {
    // console.log('컴포넌트 나타남');
    const access_token = localStorage.getItem('loginToken');
    if (!access_token) {
      navigator('/');
    }
    dispatch(getTodosAsync(access_token));
  }, []);
  // useEffect(() => {
  //   console.log('state 값 업데이트');
  //   dispatch(getTodosAsync());
  // }, [todos]);

  return <Todos todos={todos} />;
}

export default TodosContainer;
