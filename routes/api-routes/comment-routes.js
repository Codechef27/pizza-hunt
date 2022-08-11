const router = require('express').Router();

const { addComment, removeComment, addReply, deleteReply } = require('../../controllers/comment-controllers');

router
.route('/:pizzaId')
.post(addComment);

router
.route('/:pizzaId/:commentId')
.put(addReply)
.delete(removeComment)

router
.route(':pizzaId/:commentId/:replyId')
.delete(deleteReply)

module.exports = router; 