import React from 'react';

import {
  StyledHeader
} from './style';

import {
  HeaderProps
} from './types';

const Header = ({sizeTodos}: HeaderProps) => (
  <StyledHeader>
    <div>
      <p>Tarefas <span> {sizeTodos} </span> </p>
    </div>
  </StyledHeader>
);

export default Header;
