import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Line = styled(Row)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`


export const Column = styled(Col)`
  margin-bottom: 20px;
  transform:perspective(200px) rotateX(10deg);

  :hover {
    transform:perspective(0px) scale(1.2);
  }
`