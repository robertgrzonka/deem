import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ds from '../../design/DesignSystem'

const dynamicStyle = props => css`
  color: ${props.outline ? props.color : 'white'};
  background: ${props.outline ? 'white' : props.color};
  box-shadow: 0px 2px 3px rgba(0,0,0,0.2);
  border: 0.01rem solid ${props.outline ? props.color : 'rgba(0, 0, 0, 0.2)'};
  font-size: ${props.large ? '1rem' : '0.9rem'};
  padding: ${props.large ? '10px 42px' : '0.75rem 1.75rem'};
  font-weight: ${props.large ? 500 : 300};
  letter-spacing: ${ds.get('type.letterSpacing.small')};
  &:hover {
    background-color: ${props.outline ? props.color || 'black' : 'white'};
    box-shadow: 0px 6px 15px ${props.color ? props.color : 'black'};
    color: ${props.outline ? 'white' : props.color || 'black'};
    border: 0.1em solid ${props.outline ? 'rgba(0,0,0,0.2)' : props.color};
  }
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  background: ${ds.color('dark')};
  ${dynamicStyle};
  transition: all 0.4s;
`

export default (props) => (
  <Button href={props.href} {...props}>
    {props.children}
  </Button>
)
