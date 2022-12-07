import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/SignUp';
import { errorAction, loadingAction, successAction } from '../modules/common';
import { useDispatch } from 'react-redux';

function SignUpContainer() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    userEmail: '',
    userPassword: '',
    userPassword2: '',
  });

  const [isValidationEmail, setIsValidationEmail] = useState(false);
  const [isValidationPW, setIsValidationPW] = useState(false);
  const [isValidationPW2, setIsValidationPW2] = useState(false);

  const onValidation = (event) => {
    if (event.target.id === 'userEmail') {
      setIsValidationEmail(event.target.value.includes('@'));
    }
    if (event.target.id === 'userPassword') {
      setIsValidationPW(event.target.value.length >= 8);
    }
    if (event.target.id === 'userPassword2') {
      setIsValidationPW2(event.target.value === inputs.userPassword);
    }
  };

  const onChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    onValidation(event);
  };

  const onSignup = async (event) => {
    event.preventDefault();
    dispatch(loadingAction());
    try {
      const response = await axios.post(
        'https://pre-onboarding-selection-task.shop/auth/signup',
        {
          email: inputs.userEmail,
          password: inputs.userPassword,
        },
        {
          headers: {
            'Content-Type': `application/json`,
          },
        },
      );
      if (response) {
        console.log(response);
        alert('회원가입이 완료 되었습니다.');
        dispatch(successAction());
        navigator('/wanted-pre-onboarding-frontend');
      }
    } catch (error) {
      dispatch(errorAction(error));
    }
  };

  return (
    <SignUp
      onSignup={onSignup}
      inputs={inputs}
      onChange={onChange}
      isValidationEmail={isValidationEmail}
      isValidationPW={isValidationPW}
      isValidationPW2={isValidationPW2}
    />
  );
}

export default SignUpContainer;
