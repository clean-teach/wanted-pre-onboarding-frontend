import React, { useState } from 'react';
import CreateTodo from '../components/CreateTodo';
import { useDispatch } from 'react-redux';
import { createTodoAsync } from '../modules/todos';

function CreateTodoContainer() {
  const access_token = localStorage.getItem('loginToken');
  const dispatch = useDispatch();

  const [addInput, setAddInput] = useState('');

  const onChange = (event) => {
    setAddInput(event.target.value);
  };

  const onCreate = (event) => {
    event.preventDefault();

    if (!addInput) {
      alert('내용을 입력하세요.');
    } else {
      dispatch(createTodoAsync(access_token, addInput));
      setAddInput('');
    }
  };

  return (
    <CreateTodo onCreate={onCreate} addInput={addInput} onChange={onChange} />
  );
}

export default CreateTodoContainer;
