import styled from '@emotion/styled'
import ds from '../../design/DesignSystem'

export const Separator = styled.hr`
  margin: 50px 10px;
  border: 1px solid rgba(0,0,0,0.1);
  @media (max-width: ${ds.bp('m')}) {
    margin: 20px 5px;
  }
`
