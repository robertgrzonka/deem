import styled from '@emotion/styled'
import ds from '../../design/DesignSystem'

export const Separator = styled.hr`
  margin: 50px 10px;
  width: 50%;
  border: 1px solid ${ds.color('bright', 'darker')};
  @media (max-width: ${ds.bp('m')}) {
    margin: 20px 5px;
  }
`
