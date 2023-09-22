import { styled } from 'styled-components';

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  box-shadow: 6px 8px 5px -3px rgba(199, 197, 199, 1);
`;
export const Status = styled.span`
  color: ${props => (props.children.props.status === 'true' ? 'green' : 'red')};
  margin-left: 30px;
`;
export const Image = styled.img`
  border-radius: 15%;
  background-color: lightblue;
`;
export const Paragraph = styled.p`
  padding: 0;
  margin: 0;
`;
