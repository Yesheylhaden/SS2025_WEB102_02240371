const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Basic CRUD operations
router.get('/', commentController.getAllComments);
router.post('/', commentController.createComment);
router.get('/:id', commentController.getComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

// Nested resources
router.get('/:id/replies', commentController.getCommentReplies);
router.post('/:id/replies', commentController.replyToComment);

// Like functionality
router.get('/:id/likes', commentController.getCommentLikes);
router.post('/:id/likes', commentController.likeComment);
router.delete('/:id/likes', commentController.unlikeComment);

// User relationship
router.get('/:id/user', commentController.getCommentUser);

module.exports = router;
