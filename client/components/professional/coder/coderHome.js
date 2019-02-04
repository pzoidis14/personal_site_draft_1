import React, {Component} from 'react'
import {connect} from 'react-redux'
import {CoderBlurb, CoderProjects, CoderResume, CoderSkills} from './index'

class CoderHome extends Component {
  render() {
    return (
      <div className="section section__home">
        <CoderBlurb />
        <CoderSkills />
        <CoderProjects />
        <CoderResume />
      </div>
    )
  }
}

export default CoderHome
