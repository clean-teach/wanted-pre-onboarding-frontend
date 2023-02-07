import { useState } from 'react';
import { useForm, UseFormWatch } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSignUp } from '../../../apis/auths';
import { AuthArea } from '../../../assets/styles/GlobalStyle';
import { ISignUpForm } from '../../../types/authComponentTypes';
import { regExpEmail } from '../../../utils/regexp';

function SignUp() {
  const { register, watch, handleSubmit } = useForm<ISignUpForm>();
  const [fetchError, setFetchError] = useState(null);
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
  const [successEmail, successPassword, successPasswordConfirm, successInput] =
    getValidSignUpFrom(watch);

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
        console.log(error);
        setFetchError(error.response.data.message);
      });
  };

  return (
    <AuthArea>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="input-area">
          <input
            type="text"
            id="emailInput"
            data-testid="email-input"
            placeholder="이메일은 @를 포함하여야 합니다."
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
            placeholder="비밀번호는 8자리 이상이어야 합니다."
            {...register('password', {
              required: '비밀번호는 8자리 이상이어야 합니다.',
              minLength: 8,
            })}
            className={successPassword ? 'success' : undefined}
          />
          <label htmlFor="passwordInput">Password</label>
        </div>
        <div className="input-area">
          <input
            type="password"
            id="confirmPasswordInput"
            data-testid="password-input"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            {...register('confirmPassword', {
              required:
                '입력하신 비밀번호와 동일하게 비밀번호 확인을 입력해 주세요',
              minLength: 8,
            })}
            className={successPasswordConfirm ? 'success' : undefined}
          />
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
        </div>
        <button
          type="submit"
          data-testid="signup-button"
          disabled={successInput ? false : true}
        >
          회원가입
        </button>
        {fetchError ? <p className="warning">{fetchError}</p> : null}
      </form>
      <div className="link-area">
        <Link to="/signin">계정이 있으신가요?</Link>
      </div>
    </AuthArea>
  );
}

export default SignUp;
