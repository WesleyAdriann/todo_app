
import { createGlobalStyle } from 'styled-components';

import Roboto from '../assets/fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
  }
`;
