// import React from 'react'
import ds from '../../../design/DesignSystem'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: none;
  @media (max-width: ${ds.bp('s')}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    cursor: help;
    z-index: 10;
    position: fixed;
    left: 20px;
    bottom: 20px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: ${ds.color('secondary', 'light')};
    background-color: ${ds.color('primary')};
    box-shadow: 0px 2px 3px ${ds.color('dark', 'lighter')};
    transition: all 0.4s;
    &:hover {
      box-shadow: 0px 3px 12px ${ds.color('primary')};
    }
  }
`

export const MiniSidebar = () => (
  <Wrapper>
    <p>M</p>
  </Wrapper>
)
