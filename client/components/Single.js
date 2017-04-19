import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
  render() {
    // index of the post
    // access the post.code via params
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    // get teh post
    const post = this.props.posts[i]
    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
})

export default Single
