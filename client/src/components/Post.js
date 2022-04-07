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

  const [info, showInfo] = useState(false)
  const [clicked, isClicked] = useState(false)

  useEffect(() => {
    props.fetchPosts()
    isClicked(false)
  },[clicked])

  useEffect(() => {
    props.fetchPosts()
    isClicked(false)
  },[clicked])

  //On form submit, the form targets an invisible frame to avoid a redirect
  //I had to use two useEffects, still unsure why but the comment section only updated when I clicked a second time (without refreshing).
  //I think it's because the axios call for a rerender is made before the post. Unsure how to get around this, I only needed a single useEffect to get updates on state change in project 2. 
  //I probably should have used Redux to make a new state, but I stayed up too late and couldn't figure it out

  return (
    <div className='wrapper'>
      <h1>Travel Blog</h1>
      <button className='toggle' onClick={()=>showInfo(false)}>Picture</button>
      <button className='toggle' onClick={()=>showInfo(true)}>Info</button>
        {props.postsState.posts && props.postsState.posts.map((post) => (
          <ul key={post._id} className='location-container'>
            <div className='location'>
              <h2 className='location-name' >{post.locationName}</h2>
              <br/>
              {
              info ? (
                <div className='info-container'>
                    <div style={{
                    maxHeight: "200px",
                    overflowY: "scroll"
                    }} className='info'>
                      {post.description}
                  </div>
                  </div>
              ) : (
                <div>
                  <img className='location-image' 
                  src={post.image} 
                  alt={post.location} 
                  style={{
                    width: "300px", 
                    maxHeight: "180px"}}/>
                </div>
                )
              }
              <form 
              onSubmit={()=>isClicked(true)} target="ifrm1" 
              id="new-comment" 
              action={`http://localhost:3001/api/${post._id}`} 
              method="POST">
                <input 
                className='user' 
                type="text" 
                name="username" 
                placeholder="Username"/>
                <input 
                type="text" 
                name="text" 
                placeholder="Comment Here"/>
                <input 
                className='rating' 
                type="number" 
                name="review" 
                placeholder="1-5" min="1" max="5"/>
                <div className='button-wrapper'>
                  <button type="submit">Submit</button>
                  <button type="reset">Clear</button>
                </div>
              </form>
              <iframe id="ifrm1" name="ifrm1" style={{display: "none"}}></iframe>
            </div>
            <div className='comment-container' 
            style={{overflowY: "scroll"}} >
              <h2>Comments</h2>
              <div className='comments'>
                {post.comment.map((commentItem) => (
                  <ul className='comment-item' 
                  key={commentItem._id}>
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