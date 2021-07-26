import { Component, createRef } from 'react';
import Router from 'next/router';

interface IPrev {
  count: number;
}

export default class LifecycleClassPage extends Component {
  state = {
    count: 0,
    // aaa:1
  };

  inputRef = createRef<HTMLInputElement>(); // inputRef 이름은 임의지정임.

  componentDidMount() {
    // 컴포넌트 그려지고 자동으로 한번만 실행됨.
    console.log('마운트 완료!');
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    // 해당 컴포넌트에 변경되면 일어나는 부분 ([의존성배열]이 없을 경우.)
    console.log('컴포넌트 변경됨!');
  }

  componentWillUnmount() {
    // 컴포넌트가 사라질 때 실행되게 한다.
    alert('잘가요~'); // 다른페이지로 넘기는 것.
  } // ex) 슬랙 나가면 비활성화로 색 바뀌는 거

  onClickCount = () => {
    this.setState((prev: IPrev) => ({
      // state가 거대한 state이기 때문에 얘도 거대한 setState만들어줌.
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push('/');
  };

  render() {
    return (
      <>
        <input type="password" ref={this.inputRef} />
        <div>카운트 : {this.state.count}</div>
        <button onClick={this.onClickCount}>카운트 + 1</button>
        <div>클래스 컴포넌트입니다.</div>
        <button onClick={this.onClickMove}>나가기</button>
      </>
    );
  }
}
