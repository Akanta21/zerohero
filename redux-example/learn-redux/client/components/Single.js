import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends React.Component {
    render() {
        //  index of the post
        const {postId} = this.props.params
        const i = this.props.posts.findIndex((post) => post.code === postId)
        console.log(postId)
        const post = this.props.posts[i]
        const postComments = this.props.comments[postId] || []
        return (
             <div className="single-photo">
                 <Photo i={i} key={i} post={post} {...this.props} />
                 <Comments postComments={postComments} {...this.props}/>
             </div>
        )
    }
}

export default Single