const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const CommentSchema = new Schema({
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    },
  ],
  writtenBy: {
    type: String,
  },
  commentBody: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;