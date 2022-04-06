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

  useEffect(() => {
    props.fetchPosts()
    console.log("props:",props.postsState)
  },[])

  return (
    <div className='wrapper'>
      <h1>Travel Blog</h1>
        {props.postsState.posts && props.postsState.posts.map((post) => (
          <ul key={post._id} className='location-container'>
            <div className='location'>
              <h3>{post.locationName}</h3>
              <br/>
              <img className='location-image' src={post.image} alt={post.location} style={{width: "300px"}}/>
              <form id="new-comment" action={`http://localhost:3001/api/${post._id}`} method="POST">
                <input type="text" name="username" placeholder="Username"/>
                <input type="text" name="text" placeholder="Comment Here"/>
                <input className='rating' type="number" name="review" placeholder="1-5" min="1" max="5"/>
                <div className='button-wrapper'>
                  <button type="submit" onClick={()=> {alert('Comment Added!')}} >Submit</button>
                  <button type="reset" >Clear</button>
                </div>
              </form>
            </div>
            <div className='comment-container'>
              <h2>Comments</h2>
              {post.comment.map((commentItem) => (
                <ul className='comment-item' key={commentItem._id}>
                  <h3>{commentItem.username}: {commentItem.review}/5</h3>
                  <p>{commentItem.text}</p>
                </ul>
              ))}
            </div>
          </ul>
        ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)