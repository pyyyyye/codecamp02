// 22-login.tsx 파일의 코드와 비교해볼 것.
import FormUI from './Form.presenter';
import { useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { LOGIN_USER } from './Form.queries';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './Form.validation';

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onSubmit(data: any) {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      Modal.info({ content: '로그인 완료' });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <FormUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
