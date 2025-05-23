const Comment = require('../models/Comment');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllComments = catchAsync(async (req, res, next) => {
  const comments = await Comment.find().populate('user', 'username avatar');
  
  res.status(200).json({
    status: 'success',
    results: comments.length,
    data: {
      comments
    }
  });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const newComment = await Comment.create({
    content: req.body.content,
    user: req.user.id, // Assuming authenticated user
    video: req.body.video // If commenting on a video
  });
  
  res.status(201).json({
    status: 'success',
    data: {
      comment: newComment
    }
  });
});

exports.getCommentById = catchAsync(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id).populate('user', 'username avatar');
  
  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      comment
    }
  });
});

exports.updateComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { content: req.body.content },
    {
      new: true,
      runValidators: true
    }
  ).populate('user', 'username avatar');
  
  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      comment
    }
  });
});

exports.deleteComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndDelete(req.params.id);
  
  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.likeComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likedBy: req.user.id }, $inc: { likes: 1 } },
    { new: true }
  ).populate('user', 'username avatar');
  
  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      comment
    }
  });
});

exports.unlikeComment = catchAsync(async (req, res, next) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { $pull: { likedBy: req.user.id }, $inc: { likes: -1 } },
    { new: true }
  ).populate('user', 'username avatar');
  
  if (!comment) {
    return next(new AppError('No comment found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: {
      comment
    }
  });
});