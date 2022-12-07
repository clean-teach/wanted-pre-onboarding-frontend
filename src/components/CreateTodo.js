import React from 'react';
import styled from 'styled-components';

function CreateTodo({ onCreate, addInput, onChange }) {
  const AddArea = styled.div`
    margin-bottom: 2rem;
    input {
      width: 100%;
      height: 2rem;
      box-sizing: border-box;
    }
  `;
  return (
    <AddArea className="round-box">
      <form onSubmit={onCreate}>
        <input type="text" value={addInput} onChange={onChange} />
        <button>추가</button>
      </form>
    </AddArea>
  );
}

export default CreateTodo;
