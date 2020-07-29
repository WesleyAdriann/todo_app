import React from 'react';

import {
  StyledFooter,
} from './style';

const Footer = () => (
  <StyledFooter>
    <div>
      <p>
        Autor&nbsp;
        <a
          rel='noopener noreferrer'
          href='https://github.com/WesleyAdriann'
          target='_blank'
        >
          Wesley Adriann
        </a>
        &nbsp;|&nbsp;
        <a
          rel='noopener noreferrer'
          href='https://github.com/wesleyadriann/todo_app'
          target='_blank'
        >
          Todo App Typescript
        </a>
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
