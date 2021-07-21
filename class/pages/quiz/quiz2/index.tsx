import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';
import { Modal } from 'antd';

export default function QuizPage2() {
  const [address, setAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [zoneCode, setZoneCode] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [interlock, setInterlock] = useState(false);
  const [interlockTxt, setInterlockTxt] = useState('');

  function onComplete(data) {
    setAddress(data.address);
    setZoneCode(data.zonecode);
    setIsOpen(false);
  }
  function onCompleteQuiz3(data) {
    setInterlockTxt(data.address); // ---------- 주소 글자 누르면 모달 꺼짐.
    setInterlock(false);
  }
  function searchForAdress() {
    // ----------------------- 2-1 주소찾기 열기버튼
    setIsOpen(true);
  }
  // function onClose() {
  //   // ----------------------- 2-1 주소찾기 onClose
  //   setIsOpen(false);
  // }
  function showModal() {
    // ----------------------------- 2-2 모달열기 버튼
    // setIsOpen(true);
    setIsModalVisible(true);
  }
  // function onCloseShow() {
  //   // ----------------------------- 2-2 경고창 onClose
  //   setIsModalVisible(false);
  // }
  function interlockClick() {
    // --------------------------- 2-3 라이브러리 연동 열기버튼
    setInterlock(true);
  }
  // function onCloseInterlock() {
  //   // --------------------------- 2-3 라이브러리 연동 onClose
  //   setInterlock(false);
  // }
  function onClose() {
    // 2-1~2-3 onClose 합친 것.
    setIsOpen(false);
    setIsModalVisible(false);
    setInterlock(false);
  }

  return (
    <>
      {/* -2-1 주소검색 라이브러리 만들기- */}
      {isOpen && (
        <Modal
          title="2-1. 모달 주소 검색하기"
          visible={isOpen}
          onOk={onClose}
          onCancel={onClose}
        >
          <DaumPostcode onComplete={onComplete} />
        </Modal>
      )}
      <button onClick={searchForAdress}>2-1 주소검색 모달열기</button>
      <br />
      <input value={address} readOnly />
      <br />
      <input value={zoneCode} readOnly />
      <hr />
      {/* -2-2 모달 라이브러리 경고창 만들기- */}
      {isModalVisible && (
        <Modal
          title="2-2. 모달 경고창 만들기"
          visible={isModalVisible}
          onOk={onClose}
          onCancel={onClose}
        >
          <div>게시물이 등록되었습니다. </div>
        </Modal>
      )}
      <button onClick={showModal}>2-2 경고창 모달열기</button>
      <hr />
      {/* -2-3 모달 & 주소검색라이브러리 연동하기 - */}
      {interlock && (
        <Modal
          title="2-3 모달에 주소검색 연동하기"
          visible={interlock}
          onOk={onClose}
          onCancel={onClose}
        >
          <DaumPostcode onComplete={onCompleteQuiz3} />
        </Modal>
      )}
      <button onClick={interlockClick}>2-3 주소검색결과 화면에state </button>
      <div>{interlockTxt}</div>
    </>
  );
}
