import { styled } from 'styled-components';

export const Container = styled.div`
  width: 257px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-color: lightblue;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  gap: 10px;
`;
export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid aliceblue;
  width: 100px;
  height: 100px;
`;
export const Paragraph = styled.p`
  color: ${props => (props.className === 'name' ? 'balck' : 'grey')};
  font-weight: ${props => (props.className === 'name' ? 700 : 400)};
  margin: 0;
`;
export const Stats = styled.ul`
  margin: auto;
  padding: 0;
  display: flex;
  background-color: #e0ebfe;
  border: 1px solid #b1ccff;
  :first-child {
    border-right: 1px solid #b1ccff;
  }
  :last-child {
    border-left: 1px solid #b1ccff;
  }
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  :first-child {
    border-right: none;
    font-size: 14px;
    color: gray;
  }
  :last-child {
    border-left: none;
    font-size: 14px;
    font-weight: 700;
  }
`;
