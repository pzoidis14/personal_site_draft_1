import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  ProfessionalBlurb,
  ProfessionalButton,
  ProfessionalResume,
  ProfessionalSkills
} from './index'

class ProfessionalHome extends Component {
  render() {
    return (
      <div className="section section__home">
        <ProfessionalBlurb />
        <ProfessionalSkills />
        <ProfessionalButton />
        <ProfessionalResume />
      </div>
    )
  }
}

export default ProfessionalHome
