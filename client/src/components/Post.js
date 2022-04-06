import {LoadPosts} from '../store/actions/TravelActions'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react'



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
    <div>
      <h1>Travel Blog</h1>
      {props.postsState.posts && props.postsState.posts.map((post) => (
        <ul key={post._id}>
          <h3>{post.locationName}</h3>
          <br/>
          <img src={post.image} alt={post.location} style={{width: "300px"}}/>
          <form id="new-comment" target="ifrm1" action={`http://localhost:3001/api/${post._id}`} method="POST">
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="text" placeholder="Comment Here"/>
            <input type="number" name="review" placeholder="1-5" min="1" max="5"/>
            <button type="submit" 
              onClick={()=> {
                alert('Comment Added!')
                window.location.reload()
              }} >Submit</button>
          </form>
          <iframe id="ifrm1" name="ifrm1" style={{display:"none"}}></iframe>
          {post.comment.map((commentItem) => (
            <ul key={commentItem._id}>
              <h3>{commentItem.username}</h3>
              <p>{commentItem.text}</p>
            </ul>
          ))}
        </ul>
      ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)