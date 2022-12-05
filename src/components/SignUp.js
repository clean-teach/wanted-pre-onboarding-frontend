// import { Link } from 'react-router-dom';
// import './../styles/signForm.scss';

import { Link } from 'react-router-dom';
import Error from './Error';

function SignUp({
  onSignup,
  inputs,
  onChange,
  isValidationEmail,
  isValidationPW,
  isValidationPW2,
}) {
  return (
    <div className="sign-area round-box">
      <h2>회원가입</h2>
      <div className="sign-form">
        <form onSubmit={onSignup}>
          <label htmlFor="userEmail">이메일</label>
          <input
            type="email"
            id="userEmail"
            placeholder="이메일을 입력해주세요"
            autoFocus={true}
            value={inputs.userEmail}
            onChange={onChange}
          />
          {inputs.userEmail !== '' ? (
            !isValidationEmail ? (
              <p className="error">이메일은 @를 포함하여야 합니다.</p>
            ) : (
              <p className="success">입력한 이메일이 형식에 맞습니다.</p>
            )
          ) : null}
          <label htmlFor="userPassword">비밀번호</label>
          <input
            type="password"
            id="userPassword"
            placeholder="비밀번호는 8자 이상을 입력해 주세요."
            value={inputs.userPassword}
            onChange={onChange}
          />
          {inputs.userPassword !== '' ? (
            !isValidationPW ? (
              <p className="error">비밀번호는 8자 이상입니다.</p>
            ) : (
              <p className="success">입력한 비밀번호가 형식에 맞습니다.</p>
            )
          ) : null}
          <label htmlFor="userPassword2">비밀번호 확인</label>
          <input
            type="password"
            id="userPassword2"
            placeholder="비밀번호 다시 한번 입력해 주세요."
            value={inputs.userPassword2}
            onChange={onChange}
          />
          {inputs.userPassword2 !== '' ? (
            !isValidationPW2 ? (
              <p className="error">입력한 비밀번호와 동일하여야 합니다.</p>
            ) : (
              <p className="success">입력한 비밀번호 확인이 일치합니다.</p>
            )
          ) : null}
          <button
            type="submit"
            disabled={
              isValidationEmail && isValidationPW && isValidationPW2
                ? false
                : true
            }
          >
            회원가입
          </button>
        </form>
        <Error />
        <hr />
        <p>
          <Link to="/">로그인 하러 가기 →</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
