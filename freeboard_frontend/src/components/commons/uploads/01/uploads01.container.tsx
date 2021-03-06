// ========= boardNew - upload button container ==========
import { ChangeEvent, useState, useRef } from 'react';
import { checkValidationFile } from '../../../../commons/libraries/validation';
import Uploads01UI from './uploads01.presenter';

export default function Upload01(props) {
  const fileRef = useRef('');
  const [fileUrl, setFileUrl] = useState('');

  function onClickUpload() {
    fileRef.current?.click();
  }

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event?.target.files?.[0];
    if (!checkValidationFile(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
    console.log(' 이미지 등록성공적!!!!!!!!!!!!!!!!');
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
