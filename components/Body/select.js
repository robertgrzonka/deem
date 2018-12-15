// import Container from './container'

import React from 'react'

export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch('../js/colors.js')
    const json = await res.json()
    return { colors: json.Colors }
  }
}

const Select = (props, { options }) => (
  <Container>
    <div className='col'>
      <label htmlFor={props.htmlFor}>
        {props.name}
      </label>
      <select className='custom-select my-1 mr-sm-2' id={props.htmlFor}>
        {props.name}
      </select>
      {options}
    </div>
    <style jsx>{`
 col {
   margin-left: 1em;
 }
  `}</style>
  </Container>
)

export default Select
