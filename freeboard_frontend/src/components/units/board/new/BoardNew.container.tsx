//게시물 업로드 화면 container
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardNew.queries';
import NewPageUI from './BoardNew.presenter';
import { Modal } from 'antd';

export const INPUT_INIT = {
  writer: '',
  password: '',
  title: '',
  contents: '',
  youtubeUrl: '',
};
interface Iprops {
  isEdit?: boolean;
  data?: any;
}
interface INewInputs {
  title?: string;
  contents?: string;
}

export default function NewPage(props: IProps) {
  const router = useRouter();
  const [createBoardMutation] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [inputs, setInputs] = useState(INPUT_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUT_INIT);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  //!▶▶▶▶▶ id.pw.title.contents 빈칸 ◀◀◀◀◀◀//
  const [active, setActive] = useState(false); //버튼 초기값.false(옅은노랑)

  function onChangeAddressDetail(event: any) {
    setAddressDetail(event?.target.value);
  }
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

  //!▶▶▶▶▶ 주소입력 ◀◀◀◀◀◀//
  function onComplete(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }
  function onClickOpenModal() {
    setIsOpen(true);
  }

  //!▶▶▶▶▶  ERROR Start ◀◀◀◀◀◀//
  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? '' : '작성자를 입력해주세요.',
      password: inputs.password ? '' : '비밀번호를 입력해주세요.',
      title: inputs.title ? '' : '제목을 입력해주세요.',
      contents: inputs.contents ? '' : '내용을 입력해주세요',
      youtubeUrl: inputs.youtubeUrl ? '' : '',
    });
    //!----- error 실행 시작-----//
    const isEvery = Object.values(inputs).every((data) => data);
    if (isEvery) {
      try {
        const result = await createBoardMutation({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        // alert('게시물이 등록되었습니다.');
        Modal.confirm({
          title: 'Confirm',
          content: '게시물이 등록되었습니다.',
          onOk: () =>
            router.push(`/board/detail/${result.data.createBoard._id}`),
          // onCancel: () => router.push(`/board/bestposts`),
        });
        // alert(result.data.createBoard._id);
      } catch (error) {
        alert(error);
      }
    }
  }

  async function onClickEdit() {
    //!---------------- 수정하기
    const newInput: INewInputs = {};
    if (inputs.title) newInput.title = inputs.title;
    if (inputs.contents) newInput.contents = inputs.contents;
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.detailpages),
          password: inputs.password,
          updateBoardInput: {
            title: newInput.title,
            contents: newInput.contents,
          },
        },
      });
      router.push(`/detail/${result.data?.updateBoard._id}`);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <NewPageUI //!-----------props로 담는 구간
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onClickOpenModal={onClickOpenModal}
      onComplete={onComplete}
      active={active}
      isEdit={props.isEdit}
      inputsErrors={inputsErrors}
      isOpen={isOpen}
      address={address}
      zipcode={zipcode}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}
