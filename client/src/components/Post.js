import {LoadPosts} from '../store/actions/TravelActions'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'




const mapStateToProps = ({ postsState }) => {
  return { postsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}



const Posts = (props) => {

  const [clicked, isClicked] = useState(false)

  useEffect(() => {
    props.fetchPosts()
    isClicked(false)
  },[clicked])

  useEffect(() => {
    props.fetchPosts()
  },[clicked])



  return (
    <div className='wrapper'>
      <h1>Travel Blog</h1>
        {props.postsState.posts && props.postsState.posts.map((post) => (
          <ul key={post._id} className='location-container'>
            <div className='location'>
              <h3>{post.locationName}</h3>
              <br/>
              <img className='location-image' src={post.image} alt={post.location} style={{width: "300px"}}/>
              <form onSubmit={()=>isClicked(true)} target="ifrm1" id="new-comment" action={`http://localhost:3001/api/${post._id}`} method="POST">
                <input className='user' type="text" name="username" placeholder="Username"/>
                <input type="text" name="text" placeholder="Comment Here"/>
                <input className='rating' type="number" name="review" placeholder="1-5" min="1" max="5"/>
                <div className='button-wrapper'>
                  <button type="submit">Submit</button>
                  <button type="reset">Clear</button>
                </div>
              </form>
              <iframe id="ifrm1" name="ifrm1" style={{display: "none"}}></iframe>
            </div>
            <div className='comment-container' style={{overflowY: "scroll"}} >
              <h2>Comments</h2>
              <div className='comments'>
                {post.comment.map((commentItem) => (
                  <ul className='comment-item' key={commentItem._id}>
                    <h3>{commentItem.username}: {commentItem.review}/5</h3>
                    <p>{commentItem.text}</p>
                  </ul>
                  ))}
                </div>
            </div>
          </ul>
        ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)