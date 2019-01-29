import styled from '@emotion/styled'

const noteTitle = 'Lorem ipsum dolor sit amet?'
const noteParagraphs = ['Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio morbi quis commodo odio aenean sed adipiscing diam. Interdum consectetur libero id faucibus nisl tincidunt eget. Accumsan tortor posuere ac ut consequat semper. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nunc lobortis mattis aliquam faucibus purus in massa.', 'Fringilla ut morbi tincidunt augue interdum. Porta nibh venenatis cras sed. Et leo duis ut diam quam nulla porttitor massa id. Porttitor eget dolor morbi non arcu. Egestas egestas fringilla phasellus faucibus scelerisque. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Dictum fusce ut placerat orci. Sed enim ut sem viverra aliquet eget sit. Dapibus ultrices in iaculis nunc sed augue lacus. Sit amet justo donec enim diam vulputate.']

const Wrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  overflow: scroll;
`

const NoteLayout = (props) => {
  const paragraphs = props.paragraphs
  const title = props.title
  const noteMap =
    paragraphs.map((paragraph) =>
      <p contentEditable>{paragraph}</p>
    )
  return (
    <Wrapper>
      <h4 contentEditable>{title}</h4>
      {noteMap}
    </Wrapper>
  )
}

const Note = () => (
  <NoteLayout title={noteTitle} paragraphs={noteParagraphs} />
)

export default Note
