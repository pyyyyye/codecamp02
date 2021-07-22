//게시물 업로드 화면 container
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD } from './BoardNew.queries';
import NewPageUI from './BoardNew.presenter';

export const INPUT_INIT = {
  writer: '',
  password: '',
  title: '',
  contents: '',
};
export default function NewPage() {
  const router = useRouter();
  const [createBoardMutation] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState(INPUT_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUT_INIT);

  //!▶▶▶▶▶ id.pw.title.contents 빈칸 ◀◀◀◀◀◀//
  const [active, setActive] = useState(false); //버튼 초기값.false(옅은노랑)

  function onChangeInputs(event: any) {
    //값이 모두 채워지면 true로 바뀜.
    const newInput = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInput);
    setActive(Object.values(newInput).every((data) => data));
    setInputsErrors({ ...inputsErrors, [event.target.name]: '' });
  }

  //!▶▶▶▶▶  ERROR Start ◀◀◀◀◀◀//
  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? '' : '작성자를 입력해주세요.',
      password: inputs.password ? '' : '비밀번호를 입력해주세요.',
      title: inputs.title ? '' : '제목을 입력해주세요.',
      contents: inputs.contents ? '' : '내용을 입력해주세요',
    });
    //!----- error 실행 시작-----//
    const isEvery = Object.values(inputs).every((data) => data);
    if (isEvery) {
      try {
        const result = await createBoardMutation({
          variables: {
            createBoardInput: {
              ...inputs,
            },
          },
        });
        alert('게시물이 등록되었습니다.');
        // alert(result.data.createBoard._id);
        router.push(`/board/detail/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <NewPageUI //!-----------props로 담는 구간
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      active={active}
      inputsErrors={inputsErrors}
    />
  );
}
