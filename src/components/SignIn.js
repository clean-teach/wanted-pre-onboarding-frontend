import React from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';

function SignIn({
  onSignin,
  onChange,
  inputs,
  isValidationEmail,
  isValidationPW,
}) {
  return (
    <>
      <h2>로그인</h2>
      <div className="sign-form round-box">
        <form onSubmit={onSignin}>
          <label htmlFor="userEmail">이메일</label>
          <input
            type="email"
            id="userEmail"
            placeholder="이메일을 입력해주세요"
            autoFocus={true}
            value={inputs.userEmail}
            onChange={onChange}
          />
          <label htmlFor="userPassword">비밀번호</label>
          <input
            type="password"
            id="userPassword"
            placeholder="비밀번호를 입력해주세요."
            value={inputs.userPassword}
            onChange={onChange}
          />
          <button
            type="submit"
            disabled={isValidationEmail && isValidationPW ? false : true}
          >
            로그인
          </button>
        </form>
        <Error />
        <hr />
        <p>
          아직 계정이 없으신가요? <Link to="/signup">회원가입 하러 가기 →</Link>
        </p>
      </div>
    </>
  );
}

export default SignIn;
