// ======= 중고마켓 회원가입 | market signup container =======
import { useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { IMutation } from '../../../../commons/types/generated/types';
import MarketSignupUI from './MarketSignup.presenter';
export const SGINUP_INPUT = {
  name: '',
  email: '',
  password: '',
};
import { CREATE_USER } from './MarketSignup.queries';

export default function MarketSingup() {
  const [signupInput, setSignupInput] = useState(SGINUP_INPUT);
  const [passwordAgain, setPasswordAgain] = useState('');
  const [createUser] = useMutation<IMutation>(CREATE_USER);
  const [inputError, setInputError] = useState(SGINUP_INPUT);

  function onChangePasswordAginInput(event: ChangeEvent<HTMLInputElement>) {
    setPasswordAgain(event.target.value);
  }
  function onChangeSignupInput(event: ChangeEvent<HTMLInputElement>) {
    setSignupInput({
      ...signupInput,
      [event.target.name]: event.target.value,
    });
  }
  async function onClickSignup() {
    setInputError({
      name: signupInput.name ? '' : '이름을 입력해주세요.',
      email: signupInput.email ? '' : '이메일을 입력해주세요.',
      password: signupInput.password ? '' : '비밀번호를 입력해주세요.',
    });

    const isEvery = Object.values(signupInput).every((data) => data);
    if (!isEvery) return;
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...signupInput,
          },
        },
      });
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketSignupUI
      onChangeSignupInput={onChangeSignupInput}
      onChangePasswordAginInput={onChangePasswordAginInput}
      onClickSignup={onClickSignup}
      inputError={inputError}
    />
  );
}
