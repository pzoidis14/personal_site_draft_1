import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class LandingBlurb extends Component {
  render() {
    return (
      <div className="landing__title">
        <div className="landing__text">Hi, I'm Tyler.</div>
        <div className="landing__description">
          Former brand consultant, current software engineer, and you can find
          me in Manhattan, daydreaming about the next ski trip I have planned.
        </div>
        <div className="landing__description">Welcome to my site.</div>
        <div className="landing__cta-items">
          <Link to="/professional" className="landing__cta-item">
            Professional
          </Link>
          <Link to="/blog" className="landing__cta-item">
            Blog
          </Link>
          <Link to="/about" className="landing__cta-item">
            About
          </Link>
        </div>
      </div>
    )
  }
}

export default LandingBlurb
