import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthArea } from '../../../assets/styles/GlobalStyle';
import { ISignInForm } from '../../../types/authComponentTypes';
import { regExpEmail } from '../../../utils/regexp';

interface IProps {
  register: UseFormRegister<ISignInForm>;
  watch: UseFormWatch<ISignInForm>;
  handleSubmit: UseFormHandleSubmit<ISignInForm>;
  handleSignIn: (inputData: ISignInForm) => void;
  getValidSignInFrom: (watch: UseFormWatch<ISignInForm>) => boolean[];
  fetchError: string | null;
}

function SignInPresentational({
  register,
  watch,
  handleSubmit,
  handleSignIn,
  getValidSignInFrom,
  fetchError,
}: IProps) {
  const [successEmail, successPassword, successInput] =
    getValidSignInFrom(watch);

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
            className={successEmail ? 'success' : ''}
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
            className={successPassword ? 'success' : ''}
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

export default SignInPresentational;
