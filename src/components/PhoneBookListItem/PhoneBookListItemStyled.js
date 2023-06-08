import styled from 'styled-components';
export const PhoneBookListItem = styled.li`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em;
  margin: 0.2em;
`;
export const NameSpan = styled.span`
  font-weight: 600;
`;
export const TelSpan = styled(NameSpan)`
  font-weight: 500;
`;
