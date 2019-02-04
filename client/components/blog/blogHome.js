import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BlogsList, BlogBlurb} from './index'

class BlogHome extends Component {
  render() {
    return (
      <div>
        <h1>Blog Home</h1>
        <BlogBlurb />
        <BlogsList />
      </div>
    )
  }
}

export default BlogHome
