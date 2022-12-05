import React from 'react';

function EditTodo({ onEdit, onEditInputChange, editInput, onEditCancel }) {
  return (
    <div className="edit-area">
      <input type="text" onChange={onEditInputChange} value={editInput} />
      <div className="button-wrap">
        <button onClick={onEdit}>수정</button>
        <button onClick={onEditCancel}>취소</button>
      </div>
    </div>
  );
}

export default EditTodo;
