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
    console.log('hi')
    console.log("props:",props.postsState)
  },[])

  return (
    <div>
      <p>Hello</p>
      {props.postsState.posts.map((post) => (
        <ul key={post._id}>
          <Link to={`/:_id`}>{post.locationName}</Link>
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