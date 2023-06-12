import styled from 'styled-components';
export const BookForm = styled.form`
  padding: 5px;
`;
export const Div = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`;
export const NameInput = styled.input`
  width: 300px;
  height: 30px;
  margin: 0.5em;
  margin-bottom: 2em;
  padding: 0.2em;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 8px 3px rgba(147, 114, 163, 0.75);
    -webkit-box-shadow: 0px 0px 8px 3px rgba(147, 114, 163, 0.75);
    -moz-box-shadow: 0px 0px 8px 3px rgba(147, 114, 163, 0.75);
  }
`;
export const Label = styled.label`
  display: block;
  margin: 0.5em;
`;
export const Paragraph = styled.p`
  margin: 0.5em;
`;
export const AddBtn = styled.button`
  margin: 0.5em;
  padding: 8px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid gray;
  &:hover,
  &:focus {
    /* background: rgba(0, 216, 255, 074); */
    background: rgba(147, 114, 163, 074);
  }
`;
export const TelInput = styled(NameInput)``;
export const SearchInput = styled(NameInput)``;
export const DeleteBtn = styled(AddBtn)`
  margin: 0;
  padding: 0.3em;
`;
