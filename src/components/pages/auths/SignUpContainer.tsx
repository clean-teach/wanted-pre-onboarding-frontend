import { useState } from 'react';
import { useForm, UseFormWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '../../../apis/auth';
import { ISignUpForm } from '../../../types/authComponentTypes';
import { regExpEmail } from '../../../utils/regexp';
import SignUpPresentational from './SignUpPresentational';

function SignUpContainer() {
  const { register, watch, handleSubmit } = useForm<ISignUpForm>();
  const [fetchError, setFetchError] = useState<string | null>(null);
  const navigate = useNavigate();

  const getValidSignUpFrom = (watch: UseFormWatch<ISignUpForm>) => {
    const successEmail = regExpEmail.test(watch().email);
    const successPassword = watch().password?.length >= 8;
    const successPasswordConfirm =
      watch().confirmPassword?.length >= 8 &&
      watch().password === watch().confirmPassword;
    const successInput =
      successEmail && successPassword && successPasswordConfirm;

    return [
      successEmail,
      successPassword,
      successPasswordConfirm,
      successInput,
    ];
  };

  const handleSignUp = (inputData: ISignUpForm) => {
    fetchSignUp({
      email: inputData.email,
      password: inputData.password,
    })
      .then((response) => {
        console.log(response);
        alert('회원가입이 완료 되었습니다.');
        navigate('/signin');
      })
      .catch((error) => {
        console.error(error);
        setFetchError(error.response.data.message);
      });
  };

  return (
    <SignUpPresentational
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      handleSignUp={handleSignUp}
      getValidSignUpFrom={getValidSignUpFrom}
      fetchError={fetchError}
    />
  );
}

export default SignUpContainer;
