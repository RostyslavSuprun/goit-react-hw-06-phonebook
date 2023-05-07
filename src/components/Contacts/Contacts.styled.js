import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  width: 400px;

  & td {
    padding: 10px;
  }

  & td:first-child {
    font-weight: bold;
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
