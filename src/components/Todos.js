import React from 'react';
// import Error from './Error';
import TodoItemContainer from '../containers/TodoItemContainer';
import CreateTodoContainer from '../containers/CreateTodoContainer';

function Todos({ todos }) {
  return (
    <div>
      <CreateTodoContainer />
      {todos ? (
        <ul>
          {todos.map((todo) => (
            <TodoItemContainer key={todo.id} todoItem={todo} />
          ))}
        </ul>
      ) : null}
      {/* <Error /> */}
    </div>
  );
}

export default Todos;
