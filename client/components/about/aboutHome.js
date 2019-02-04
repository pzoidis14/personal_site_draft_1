import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AboutBlurb} from './index'

class AboutHome extends Component {
  render() {
    return (
      <div>
        <h1>About Home</h1>
        <AboutBlurb />
      </div>
    )
  }
}

export default AboutHome
