const express = require('express');
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
} = require('./controllers/postController');

const router = express.Router();

// Define routes
router.route('/')
    .get(getPosts)        // Get all posts
    .post(createPost);    // Create a new post

router.route('/:id')
    .get(getPost)        // Get a specific post by ID
    .put(updatePost)     // Update a specific post by ID
    .delete(deletePost); // Delete a specific post by ID

module.exports = router;