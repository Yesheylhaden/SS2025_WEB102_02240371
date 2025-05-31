const express = require('express');
const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
} = require('./controllers/userController');

const router = express.Router();

// Define routes
router.route('/')
    .get(getUsers)         // Get all users
    .post(createUser);     // Create a new user

router.route('/:id')
    .get(getUser)         // Get a specific user by ID
    .put(updateUser)      // Update a specific user by ID
    .delete(deleteUser);  // Delete a specific user by ID

module.exports = router;