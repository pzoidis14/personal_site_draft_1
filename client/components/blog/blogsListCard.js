import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BlogSingle} from './index'

class BlogsListCard extends Component {
  render() {
    return (
      <div>
        <h1>Blogs List Card</h1>
        <BlogSingle />
      </div>
    )
  }
}

export default BlogsListCard
