import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ConsultantBlurb,
  ConsultantProjects,
  ConsultantResume,
  ConsultantSkills
} from './index'

class ConsultantHome extends Component {
  render() {
    return (
      <div className="section section__home">
        <ConsultantBlurb />
        <ConsultantSkills />
        <ConsultantProjects />
        <ConsultantResume />
      </div>
    )
  }
}

export default ConsultantHome
