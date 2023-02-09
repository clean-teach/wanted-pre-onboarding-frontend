import styled from 'styled-components';
import { ITodo } from '../../../types/atomsTypes';
import CreateTodoContainer from '../../todos/CreateTodoContainer';
import TodoItemContainer from '../../todos/TodoItemContainer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h3 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;
const TodoArea = styled.div`
  width: 760px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface IProps {
  access_token: string;
  todos: ITodo[];
}

function TodoListPresentational({ access_token, todos }: IProps) {
  return (
    <Wrapper>
      <TodoArea>
        <CreateTodoContainer access_token={access_token} />
        <ul>
          {todos.map((todo) => (
            <TodoItemContainer
              key={todo.id}
              access_token={access_token}
              todoData={todo}
            />
          ))}
        </ul>
      </TodoArea>
    </Wrapper>
  );
}

export default TodoListPresentational;
