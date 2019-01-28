/** @jsx jsx */
import Link from 'next/link'
import { jsx, css } from '@emotion/core'
import ds from '../../design/DesignSystem'

const linkStyles = css`
  font-size: ${ds.fontSize('base')};
  color: ${ds.brand('primary')};
  padding-bottom: 5px;
  text-decoration: none;
  transition: all 0.4s;
  &:hover {
    color: ${ds.brand('secondary')};
    border-bottom: 0.01rem dotted ${ds.brand('secondary')};
  }
`

const Hyperlink = (props) => {
  return (
    <Link
      as={`/${props.title.toLowerCase()}`}
      href={`/page/${props.href}`}
      prefetch>
      <a className={linkStyles}>{props.title}</a>
    </Link>
  )
}

export default Hyperlink
