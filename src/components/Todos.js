import React from 'react';
// import Error from './Error';
import TodoItemContainer from '../containers/TodoItemContainer';
import CreateTodoContainer from '../containers/CreateTodoContainer';
import styled from 'styled-components';

const Container = styled.div`
  width: 640px;
`;

function Todos({ todos }) {
  return (
    <Container>
      <CreateTodoContainer />
      {todos ? (
        <ul>
          {todos.map((todo) => (
            <TodoItemContainer key={todo.id} todoItem={todo} />
          ))}
        </ul>
      ) : null}
      {/* <Error /> */}
    </Container>
  );
}

export default Todos;
