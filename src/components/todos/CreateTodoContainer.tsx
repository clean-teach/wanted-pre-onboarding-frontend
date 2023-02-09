import { useForm } from 'react-hook-form';
import { fetchCreateTodo } from '../../apis/todo';
import { ICreateTodoForm } from '../../types/todoComponentTypes';
import { useSetRecoilState } from 'recoil';
import { atomTodos } from '../../atoms/atoms';
import CreateTodoPresentational from './CreateTodoPresentational';

interface IProps {
  access_token: string;
}

function CreateTodoContainer({ access_token }: IProps) {
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
    <CreateTodoPresentational
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      handleCreateTodo={handleCreateTodo}
      errors={errors}
    />
  );
}

export default CreateTodoContainer;
