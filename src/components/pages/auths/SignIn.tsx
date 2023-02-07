import { useState } from 'react';
import { useForm, UseFormWatch } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSignIn } from '../../../apis/auth';
import { AuthArea } from '../../../assets/styles/GlobalStyle';
import { ISignInForm } from '../../../types/authComponentTypes';
import { regExpEmail } from '../../../utils/regexp';
import { LOCALSTORAGE_KEY_LOGIN_TOKEN } from '../../../utils/strings';
import { useSetRecoilState } from 'recoil';
import { atomIsAccess } from '../../../atoms/atoms';

function SignIn() {
  const [fetchError, setFetchError] = useState(null);
  const { register, watch, handleSubmit } = useForm<ISignInForm>();
  const navigate = useNavigate();
  const IsAccess = useSetRecoilState(atomIsAccess);

  const getValidSignInFrom = (watch: UseFormWatch<ISignInForm>) => {
    const successEmail = regExpEmail.test(watch().email);
    const successPassword = watch().password?.length >= 8;
    const successInput = successEmail && successPassword;

    return [successEmail, successPassword, successInput];
  };
  const [successEmail, successPassword, successInput] =
    getValidSignInFrom(watch);

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
        setFetchError(error.response.data.message);
      });
  };

  return (
    <AuthArea>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <div className="input-area">
          <input
            type="text"
            id="emailInput"
            data-testid="email-input"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: '이메일은 @를 포함하어야 합니다.',
              pattern: regExpEmail,
            })}
            autoFocus={true}
            className={successEmail ? 'success' : undefined}
          />
          <label htmlFor="emailInput">E-mail</label>
        </div>
        <div className="input-area">
          <input
            type="password"
            id="passwordInput"
            data-testid="password-input"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: '비밀번호는 8자리 이상이어야 합니다.',
              minLength: 8,
            })}
            className={successPassword ? 'success' : undefined}
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <button
          type="submit"
          data-testid="signin-button"
          disabled={successInput ? false : true}
        >
          로그인
        </button>
        {fetchError ? <p className="warning">{fetchError}</p> : null}
      </form>
      <div className="link-area">
        <Link to="/signup">계정이 없으신가요?</Link>
      </div>
    </AuthArea>
  );
}

export default SignIn;
