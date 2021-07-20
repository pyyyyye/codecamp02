import { Modal } from 'antd';
import { useState } from 'react';

// "게시물 등록" 버튼을 누르면 Modal창이 뜨도록
export default function Librares3Page() {
  const [isOpen, setIsOpen] = useState(false);

  function onClickSubmit() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        title="게시글 등록"
        visible={isOpen}
        onOk={onClose} // onOk, onCancel의 기능이 둘 다 모달창 끄는 기능을 갖고있어서
        onCancel={onClose} // 같이 onClose로 넣어준 것.
      >
        <div>게시물이 정상적으로 등록되었습니다.</div>
      </Modal>
      <button onClick={onClickSubmit}>게시물 등록</button>
    </>
  );
}
