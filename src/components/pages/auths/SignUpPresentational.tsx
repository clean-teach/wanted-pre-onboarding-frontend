import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthArea } from '../../../assets/styles/GlobalStyle';
import { ISignUpForm } from '../../../types/authComponentTypes';
import { regExpEmail } from '../../../utils/regexp';

interface IProps {
  register: UseFormRegister<ISignUpForm>;
  watch: UseFormWatch<ISignUpForm>;
  handleSubmit: UseFormHandleSubmit<ISignUpForm>;
  handleSignUp: (inputData: ISignUpForm) => void;
  getValidSignUpFrom: (watch: UseFormWatch<ISignUpForm>) => boolean[];
  fetchError: string | null;
}

function SignUpPresentational({
  register,
  watch,
  handleSubmit,
  handleSignUp,
  getValidSignUpFrom,
  fetchError,
}: IProps) {
  const [successEmail, successPassword, successPasswordConfirm, successInput] =
    getValidSignUpFrom(watch);

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

export default SignUpPresentational;
