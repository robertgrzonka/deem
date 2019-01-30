import Link from 'next/link'

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
