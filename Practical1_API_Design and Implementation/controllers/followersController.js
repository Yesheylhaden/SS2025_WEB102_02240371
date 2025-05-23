// controllers/followersController.js
const User = require('../models/user');

// Follow a user
exports.followUser = async (req, res) => {
  try {
    // Can't follow yourself
    if (req.user.id === req.params.userId) {
      return res.status(400).json({ message: 'You cannot follow yourself' });
    }

    const userToFollow = await User.findById(req.params.userId);
    if (!userToFollow) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if already following
    const isFollowing = req.user.following.includes(req.params.userId);
    if (isFollowing) {
      return res.status(400).json({ message: 'You already follow this user' });
    }

    // Add to current user's following list
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { following: req.params.userId }
    });

    // Add to target user's followers list
    await User.findByIdAndUpdate(req.params.userId, {
      $addToSet: { followers: req.user.id }
    });

    res.status(200).json({ message: 'Successfully followed user' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Unfollow a user
exports.unfollowUser = async (req, res) => {
  try {
    // Can't unfollow yourself
    if (req.user.id === req.params.userId) {
      return res.status(400).json({ message: 'You cannot unfollow yourself' });
    }

    const userToUnfollow = await User.findById(req.params.userId);
    if (!userToUnfollow) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if actually following
    const isFollowing = req.user.following.includes(req.params.userId);
    if (!isFollowing) {
      return res.status(400).json({ message: 'You are not following this user' });
    }

    // Remove from current user's following list
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { following: req.params.userId }
    });

    // Remove from target user's followers list
    await User.findByIdAndUpdate(req.params.userId, {
      $pull: { followers: req.user.id }
    });

    res.status(200).json({ message: 'Successfully unfollowed user' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's followers
exports.getFollowers = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .select('followers')
      .populate('followers', 'username profilePicture');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.followers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get users that a user is following
exports.getFollowing = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .select('following')
      .populate('following', 'username profilePicture');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.following);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};