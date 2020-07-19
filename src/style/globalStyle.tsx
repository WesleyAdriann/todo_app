
import { createGlobalStyle } from 'styled-components';

import Roboto from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
    font-weight: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold});
    font-weight: 700;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
