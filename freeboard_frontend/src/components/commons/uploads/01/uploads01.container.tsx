// ========= boardNew - upload button container ==========
import { ChangeEvent, useState, useRef } from 'react';
import Uploads01UI from './uploads01.presenter';

export default function Upload01() {
  const fileRef = useRef();
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
