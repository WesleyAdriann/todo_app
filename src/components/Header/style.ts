import styled from 'styled-components';


export const StyledHeader = styled.header`
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
