import { styled } from 'styled-components';

export const Trtag = styled.tr`
  background-color: lightblue;
  height: 60px;
`;
export const Table = styled.table`
  width: 377px;
`;
export const Tbody = styled.tbody`
  background-color: grey;
`;
export const Titem = styled.tr`
  height: 50px;
  text-align: center;
  background-color: ${props => (props.even ? 'white' : 'lightgrey')};
`;
