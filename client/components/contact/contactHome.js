import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ContactBlurb} from './index'

class ContactHome extends Component {
  render() {
    return (
      <div>
        <h1>Contact Home</h1>
        <ContactBlurb />
      </div>
    )
  }
}

export default ContactHome
