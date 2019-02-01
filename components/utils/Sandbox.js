import React from 'react'
import ContentEditable from 'react-contenteditable'

export class Header extends React.Component {
  constructor (props) {
    super(props)
    this.contentEditable = React.createRef()
    this.state = {
      html: this.props.initialHtml
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
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
        tagName='h1'
      />
    )
  }
}

export class Paragraph extends React.Component {
  constructor (props) {
    super(props)
    this.contentEditable = React.createRef()
    this.state = {
      html: this.props.initialHtml
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
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
        tagName='p'
        style={{
          textIndent: '2rem'
        }}
      />
    )
  }
}
