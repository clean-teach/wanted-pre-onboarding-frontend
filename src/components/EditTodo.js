import React from 'react';
import styled from 'styled-components';

const EditTodoStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    color: #333333;
  }
`;

function EditTodo({ onEdit, onEditInputChange, editInput, onEditCancel }) {
  return (
    <EditTodoStyle>
      <input type="text" onChange={onEditInputChange} value={editInput} />
      <div className="button-wrap">
        <button onClick={onEdit}>수정</button>
        <button onClick={onEditCancel}>취소</button>
      </div>
    </EditTodoStyle>
  );
}

export default EditTodo;
