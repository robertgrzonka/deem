import Link from 'next/link'

const Hyperlink = (props) => {
  return (
    <Link
      as={`/${props.title.toLowerCase()}`}
      href={`/page/${props.href}`}
      prefetch>
      <a>{props.title}</a>
    </Link>
  )
}

export default Hyperlink
