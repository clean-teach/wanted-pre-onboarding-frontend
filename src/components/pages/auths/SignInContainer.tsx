import { useState } from 'react';
import { useForm, UseFormWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchSignIn } from '../../../apis/auth';
import { ISignInForm } from '../../../types/authComponentTypes';
import { regExpEmail } from '../../../utils/regexp';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../../utils/strings';
import { useSetRecoilState } from 'recoil';
import { atomIsAccess } from '../../../atoms/atoms';
import SignInPresentational from './SignInPresentational';

function SignInContainer() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { register, watch, handleSubmit } = useForm<ISignInForm>();
  const navigate = useNavigate();
  const IsAccess = useSetRecoilState(atomIsAccess);

  const getValidSignInFrom = (watch: UseFormWatch<ISignInForm>) => {
    const successEmail = regExpEmail.test(watch().email);
    const successPassword = watch().password?.length >= 8;
    const successInput = successEmail && successPassword;

    return [successEmail, successPassword, successInput];
  };

  const handleSignIn = (inputData: ISignInForm) => {
    fetchSignIn({
      email: inputData.email,
      password: inputData.password,
    })
      .then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem(
            LOCALSTORAGE_KEY_LOGIN_TOKEN,
            response.data.access_token,
          );
          IsAccess(true);
          navigate('/todo');
        }
      })
      .catch((error) => {
        console.error(error);
        setFetchError(
          error.response.status === 401
            ? '아이디 or 패스워드를 확인해주세요.'
            : null,
        );
      });
  };

  return (
    <SignInPresentational
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      handleSignIn={handleSignIn}
      getValidSignInFrom={getValidSignInFrom}
      fetchError={fetchError}
    />
  );
}

export default SignInContainer;
