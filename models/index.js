const {model} = require('mongoose')

const CommentSchema = require('./Comment')
const PostSchema = require('./Post')

const Comment = model('Comment', CommentSchema)
const Post = model('Post', PostSchema)

module.exports = {
  Comment,
  Post
}
