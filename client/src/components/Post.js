import {LoadPosts} from '../store/actions/TravelActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'


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
          <form action="http://localhost:3001/:_id" method="POST">
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="text" placeholder="Comment Here"/>
            <input type="number" name="review" placeholder="1-5" min="1" max="5"/>
            <button type="submit">Submit</button>
          </form>
        </ul>
      ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)