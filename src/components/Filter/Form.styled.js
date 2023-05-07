import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & input {
    margin-left: 10px;
  }

  & .name {
    margin-left: 25px;
  }

  & button {
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 3px;
    cursor: pointer;
    padding: 2px 10px;
    margin-top: 10px;
  }

  & button:hover {
    background-color: #c7c7c7;
    transform: scale(1.05);
  }
`;
