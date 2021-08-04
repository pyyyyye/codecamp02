import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: 'font_Pretendard-Thin', 'font_Pretendard-SemiBold',
      'font_Pretendard-Regular', 'font_Pretendard-ExtraLight',
      'font_Pretendard-Bold', 'font_Pretendard-Black';
  }

  @font-face {
    font-family: 'font_Pretendard-Thin';
    src: url('/freeboard_frontend/public/font/Pretendard-Thin.ttf');
  }
  @font-face {
    font-family: 'font_Pretendard-Regular';
    src: url('/freeboard_frontend/public/font/Pretendard-Regular.ttf');
  }
  @font-face {
    font-family: 'font_Pretendard-ExtraLight';
    src: url('/freeboard_frontend/public/font/Pretendard-ExtraLight.ttf');
  }
  @font-face {
    font-family: 'font_Pretendard-Bold';
    src: url('/freeboard_frontend/public/font/Pretendard-Bold.ttf');
  }
  @font-face {
    font-family: 'font_Pretendard-Black';
    src: url('/freeboard_frontend/public/font/Pretendard-Black.ttf');
  }
`;
