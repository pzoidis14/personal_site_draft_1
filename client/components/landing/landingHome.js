import React, {Component} from 'react'
import {connect} from 'react-redux'
import {LandingBlurb} from './index'

class LandingHome extends Component {
  render() {
    return (
      <div>
        <div className="landing__cover">
          <div className="landing__background" />
          <div className="landing__greeting"> Hover to Enter</div>
          <LandingBlurb />
        </div>
      </div>
    )
  }
}

export default LandingHome
