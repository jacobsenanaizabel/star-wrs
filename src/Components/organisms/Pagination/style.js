import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Pagination from 'react-bootstrap/Pagination'

export const Line = styled(Row)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  margin-top: 1x%;

`
export const PaginationItem = styled(Pagination.Item)`
  > a {
    background-color: #495057;
    color: #dee2e6;
    border: 1px solid #495057;

    :hover{
      color: #495057;
      border: 1px solid #495057;
    }
  }
`