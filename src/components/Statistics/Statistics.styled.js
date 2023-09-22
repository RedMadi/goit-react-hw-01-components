import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 377px;
  margin-bottom: 20px;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  color: grey;
  text-align: center;
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const getFileExtension = props => {
  switch (props.color) {
    case '.docx':
      return 'lightblue';
    case '.pdf':
      return 'violet';
    case '.mp3':
      return 'red';
    case '.psd':
      return 'green';
    default:
      return 'brown';
  }
};
export const List = styled.li`
  width: calc((100%) / 5);
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
  justify-content: space-between;
  background-color: ${getFileExtension};
`;
