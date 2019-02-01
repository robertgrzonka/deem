/** @jsx jsx */
import Link from 'next/link'
import { jsx } from '@emotion/core'

const Hyperlink = (props) => {
  const id = props.id
  const title = props.title
  return (
    <Link
      as={`/${id}`}
      href={{
        pathname: `/${id}`,
        query: {
          title: `${title}`
        }
      }}
      prefetch
    >
      <a>{title}</a>
    </Link>
  )
}

export default Hyperlink
