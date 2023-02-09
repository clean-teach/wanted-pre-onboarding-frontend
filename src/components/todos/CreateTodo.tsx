import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { fetchCreateTodo } from '../../apis/todo';
import { ICreateTodoForm } from '../../types/todoComponentTypes';
import { useSetRecoilState } from 'recoil';
import { atomTodos } from '../../atoms/atoms';
import { Box } from '../../assets/styles/GlobalStyle';

const Wrapper = styled(Box)`
  width: 100%;
  h3 {
    display: none;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      width: 100%;
    }
    button {
      width: 100%;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

interface IProps {
  access_token: string;
}

function CreateTodo({ access_token }: IProps) {
  const setTodos = useSetRecoilState(atomTodos);

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICreateTodoForm>();

  const handleCreateTodo = ({ newTodoContent }: ICreateTodoForm) => {
    fetchCreateTodo({ access_token, todo: newTodoContent })
      .then((response) => {
        const { id, isCompleted, todo, userId } = response.data;
        const newTodo = {
          id,
          isCompleted,
          todo,
          userId,
        };
        setTodos((oldTodos) => {
          return oldTodos.concat(newTodo).reverse();
        });
        setValue('newTodoContent', '');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Wrapper>
      <h3>할 일 목록 생성</h3>
      <form onSubmit={handleSubmit(handleCreateTodo)}>
        <input
          type="text"
          data-testid="new-todo-input"
          {...register('newTodoContent', {
            required: '할 일을 입력해 주세요.',
            maxLength: 20,
          })}
          placeholder="새로 추가 할, 할 일을 입력해 주세요."
        />
        {watch().newTodoContent?.length > 20 && (
          <p className="warning">할 일은 20자 이내로 작성해 주세요</p>
        )}
        {errors ? (
          <p className="warning">{errors.newTodoContent?.message}</p>
        ) : null}
        <button type="submit" data-testid="new-todo-add-button">
          할 일 생성
        </button>
      </form>
    </Wrapper>
  );
}

export default CreateTodo;
