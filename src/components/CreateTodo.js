import React from 'react';

function CreateTodo({ onCreate, addInput, onChange }) {
  return (
    <div className="add-area round-box">
      <form onSubmit={onCreate}>
        <input type="text" value={addInput} onChange={onChange} />
        <button>추가</button>
      </form>
    </div>
  );
}

export default CreateTodo;
