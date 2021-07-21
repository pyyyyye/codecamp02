import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';

export default function DaumPostcodePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [zoneCode, setZoneCode] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  function onComplete(data) {
    // data부분에 클릭한 것의 정보가 들어감.
    setAddress(data.address);
    setZoneCode(data.zonecode);
    setIsOpen(false);
  }

  function onClickOpenModal() {
    setIsOpen(true);
  }
  return (
    <>
      {isOpen && (
        <Modal title="주소 검색하기" visible={isOpen}>
          <DaumPostcode onComplete={onComplete} autoClose animation />
        </Modal>
      )}
      <button onClick={onClickOpenModal}>주소 검색하기</button>
      <br />
      <input value={address} readOnly />
      <br />
      <input value={zoneCode} readOnly />
      <br />
    </>
  );
}
