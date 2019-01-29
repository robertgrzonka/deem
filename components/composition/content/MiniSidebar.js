// import React from 'react'
import ds from '../../../design/DesignSystem'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: none;
  position: fixed;
  left: 20px;
  top: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${ds.color('primary')};
  transition: all 0.4s;
  box-shadow: 0px 2px 3px ${ds.color('dark')};
  &:hover {
    box-shadow: 0px 3px 8px ${ds.color('dark', 'lighter')};
  }
  @media (max-width: ${ds.bp('s')}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    cursor: help;
  }
`

export const MiniSidebar = () => (
  <Wrapper>
    <i className='fas fa-arrow-right' />
  </Wrapper>
)
