import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BlogsListCard} from './index'

class BlogsList extends Component {
  render() {
    return (
      <div>
        <h1>Blogs List</h1>
        <BlogsListCard />
      </div>
    )
  }
}

export default BlogsList
