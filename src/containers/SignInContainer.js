import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SignIn from '../components/SignIn';
import { useDispatch } from 'react-redux';
import { errorAction, loadingAction, successAction } from '../modules/common';
import { useNavigate } from 'react-router-dom';

function SignInContainer() {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    userEmail: '',
    userPassword: '',
  });

  const [isValidationEmail, setIsValidationEmail] = useState(false);
  const [isValidationPW, setIsValidationPW] = useState(false);

  const onValidation = (event) => {
    if (event.target.id === 'userEmail') {
      setIsValidationEmail(event.target.value.includes('@'));
    }
    if (event.target.id === 'userPassword') {
      setIsValidationPW(event.target.value.length >= 8);
    }
  };

  const onChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    onValidation(event);
  };

  const onSignin = async (event) => {
    event.preventDefault();
    dispatch(loadingAction());
    try {
      const response = await axios.post(
        'https://pre-onboarding-selection-task.shop/auth/signin',
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
        const token = response.data.access_token;
        localStorage.setItem('loginToken', token);
        alert('로그인이 완료 되었습니다.');
        dispatch(successAction());
        navigator('/todos');
      }
    } catch (error) {
      dispatch(errorAction(error));
    }
  };

  useEffect(() => {
    if (localStorage.getItem('loginToken')) {
      navigator('/todos');
    }
  }, []);

  return (
    <SignIn
      onSignin={onSignin}
      onChange={onChange}
      inputs={inputs}
      isValidationEmail={isValidationEmail}
      isValidationPW={isValidationPW}
    />
  );
}

export default SignInContainer;
