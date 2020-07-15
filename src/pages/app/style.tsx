import styled from 'styled-components';

import selectIcon from '../../assets/images/down-arrow.svg';

export const Wrapper = styled.div`
  background: #571d8a;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #8E2DE2, #571d8a);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #8E2DE2, #571d8a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  min-height: 100vh;
  min-width: 100vw;
`;

export const Content = styled.div`
  display: grid;
  padding: 1em;

  /* grid-template-columns: 20% 1fr; */
`;

export const Form = styled.form`
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const Input = styled.input`
  background-color: #EEEEEE;
  border: 2px solid transparent;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  text-transform: capitalize;
  transition: border 0.5s;

  &:hover,
  &:focus {
    border-color: #510297;
  }

`;

export const Select = styled.select`
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;

  background-color: #EEEEEE;
  background-image: url(${selectIcon});
  background-position: calc(100% - 5px) 50%;
  background-repeat: no-repeat;
  background-size: 10px;
  border: 2px solid transparent;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  text-transform: capitalize;
  transition: border 0.5s;


  &:hover,
  &:focus {
    border-color: #510297;
  }

`;

export const Button = styled.button`
  background-color: #510297;
  border: 2px solid transparent;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  padding: 10px;
  transition: border 0.5s;

  &:hover {
    border-color: #8E2DE2;
  }
`;

export const TodoList = styled.div`

`;

export const TodoStyled = styled.div`

`;
