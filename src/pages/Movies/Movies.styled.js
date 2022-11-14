import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 10px;
`;

export const StyledInput = styled.input`
  width: 400px;
  border-color: lightgray;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  &:hover,
  &:focus {
    border-color: lightblue;
    border-width: 3px;
  }
`;

export const StyledButton = styled.button`
  border-color: lightgray;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 5px;
  outline: none;
`;

// export const StyledLi = styled.ul`
//   gap: 10px;
// `;
