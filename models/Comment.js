const { Schema } = require('mongoose')

const Comment = new Schema(       //Matches the file name and is singular and Pascal Case
  {
    username: { type: String, required: true},      //the type is capitalized usually. Example {type: String}
    text: { type: String, required: true},
    review: { type: Number, required: true},
  },
  { timestamps: true }        //The timestamps option tells mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date. By default, the names of the fields are createdAt and updatedAt. Customize the field names by setting timestamps.createdAt and timestamps.updatedAt
)

module.exports = Comment