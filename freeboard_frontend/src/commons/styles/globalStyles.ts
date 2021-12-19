import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: 'font_Pretendard-Regular', 'Courier';
  }

  @font-face {
    font-family: 'font_Pretendard-Thin';
    src: url('/font/Pretendard-Thin.ttf');
  }
  @font-face {
    font-family: 'font_Pretendard-Regular';
    src: url('/font/Pretendard-Regular.ttf');
  }
  @font-face {
    font-family: 'font_Pretendard-ExtraLight';
    src: url('/font/Pretendard-ExtraLight.ttf');
  }
  @font-face {
    font-family: 'Bold';
    src: url('/font/Pretendard-Bold.ttf');
  }
  @font-face {
    font-family: 'Black';
    src: url('/font/Pretendard-Black.ttf');
  }
`;
