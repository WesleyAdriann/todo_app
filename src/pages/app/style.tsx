import styled, { keyframes } from 'styled-components';

import selectIcon from '../../assets/images/down-arrow.svg';

export const Header = styled.header`
  background-color: #323a41;
  height: 50px;
  width: 100vw;

  > div {
    align-items: center;
    display: flex;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    min-height: 100%;
    padding: 0 1em;

    p {
      color: white;
      font-size: 1.2em;

      span {
        color: #323a41;
        background-color: white;
        border-radius: 50%;
        margin-left: .3em;
        padding: 1px .4em;
      }
    }
  }
`;

export const Main = styled.main`
  background: #571d8a;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #8E2DE2, #571d8a);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #8E2DE2, #571d8a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  flex-grow: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 1200px;
  /* min-height: 100vh; */
  padding: 1em;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Form = styled.form`
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  height: min-content;
  padding: 1em;

  @media (min-width: 1000px) {
    width: 25%;
  }
`;

export const Input = styled.input`
  background-color: #EEEEEE;
  border: 2px solid transparent;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  transition: border .5s;

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
  transition: border .5s;


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
  transition: border .5s;

  &:hover {
    border-color: #8E2DE2;
  }
`;

export const TodoList = styled.div`
  display: grid;
  flex-grow: 1;
  gap: 1em;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: min-content;
  }
`;

const appearTodo = keyframes`
  to {
    opacity: 1;
  }
`;

export const TodoStyled = styled.div`
  animation: linear .5s ${appearTodo} forwards;
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  padding: 1em;
  position: relative;

  @media (min-width: 1000px) {
    height: 200px;

  }
`;

export const TodoDelete = styled.span`
  color: red;
  cursor: pointer;
  font-size: 1.5em;
  line-height: 0.6;
  right: 0;
  padding: 0.5em;
  position: absolute;
  top: 0;
`;

export const TodoTitle = styled.p`
  font-size: 1.5em;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TodoPriority = styled.p`
  color: white;
  font-size: 0.8em;
  text-align: center;
  font-weight: bold;
  margin: 1.5em 0;

  > span {
    background-color: darkviolet;
    border-radius: 10px;
    padding: .2em .5em;
  }
`;

export const TodoDescription = styled.p`

  margin-bottom: 1em;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  background-color: #323a41;
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100vw;

  > div {

    p {
      color: white;
      text-align: center;
      a {
        color: white;
      }
    }
  }
`;
