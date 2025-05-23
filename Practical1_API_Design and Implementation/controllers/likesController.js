// controllers/likesController.js
const Like = require('../models/like');
const Post = require('../models/post');

// Like a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Check if user already liked the post
    const existingLike = await Like.findOne({
      user: req.user.id,
      post: req.params.postId
    });

    if (existingLike) {
      return res.status(400).json({ message: 'You already liked this post' });
    }

    const like = new Like({
      user: req.user.id,
      post: req.params.postId
    });

    const savedLike = await like.save();
    
    // Update post's likes count
    post.likesCount += 1;
    await post.save();

    res.status(201).json(savedLike);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const like = await Like.findOneAndDelete({
      user: req.user.id,
      post: req.params.postId
    });

    if (!like) {
      return res.status(404).json({ message: 'Like not found' });
    }

    // Update post's likes count
    await Post.findByIdAndUpdate(req.params.postId, {
      $inc: { likesCount: -1 }
    });

    res.status(200).json({ message: 'Post unliked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check if user liked a post
exports.checkUserLike = async (req, res) => {
  try {
    const like = await Like.findOne({
      user: req.user.id,
      post: req.params.postId
    });

    res.status(200).json({ liked: !!like });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};