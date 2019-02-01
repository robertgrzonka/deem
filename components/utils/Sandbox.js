import React from 'react'
import ContentEditable from 'react-contenteditable'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.contentEditable = React.createRef()
    this.state = {
      html: this.props.html || '<strong>Edit</strong> me!'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (evt) => {
    this.setState({
      html: evt.target.value
    })
  }

  render () {
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={this.state.html}
        disabled={false}
        onChange={this.handleChange}
        tagName={this.props.tagName}
        style={{
          textIndent: '2rem'
        }}
      />
    )
  }
}

export default Example
