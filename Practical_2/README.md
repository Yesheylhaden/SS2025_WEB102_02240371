# Practical_2: REST API Design and Implementation (Tiktok server)

## Overview:

- This project implements a RESTful API backend for a TikTok-inspired social media application using Node.js and Express. The API manages users, videos, comments, likes, and follower relationships, designed to integrate smoothly with a Next.js frontend for a complete user experience.

---

## Table of Contents

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

---

## Installation

1. **Clone the repository**
   git clone <https://github.com/Yesheylhaden/SS2025_WEB102_02240371.git>
   cd server
2. **Install dependencies**
- npm install

## Usages
- Use API testing tools like Postman or curl to interact with the endpoints.

### sample API Endpoints
Videos
- GET /api/videos – Retrieve all videos
- POST /api/videos – Create a new video
- GET /api/videos/:id – Retrieve a specific video by ID
- PUT /api/videos/:id – Update a video
- DELETE /api/videos/:id – Delete a video
- GET /api/videos/:id/comments – List comments for a video
- GET /api/videos/:id/likes – Retrieve likes for a video
- POST /api/videos/:id/likes – Like a video
- DELETE /api/videos/:id/likes – Unlike a video

### Users
- GET /api/users – Retrieve all users
- POST /api/users – Create a new user
- GET /api/users/:id – Retrieve user by ID
- PUT /api/users/:id – Update user details
- DELETE /api/users/:id – Delete a user
- GET /api/users/:id/videos – Retrieve videos posted by a user
- GET /api/users/:id/followers – Get followers of a user
- POST /api/users/:id/followers – Follow a user
- DELETE /api/users/:id/followers – Unfollow a user
- GET /api/users/:id/following – Get users followed by this user

### Comments
- GET /api/comments – Retrieve all comments
- POST /api/comments – Create a comment
- GET /api/comments/:id – Retrieve a comment by ID
- PUT /api/comments/:id – Update a comment
- DELETE /api/comments/:id – Delete a comment
- GET /api/comments/:id/likes – Retrieve likes on a comment
- POST /api/comments/:id/likes – Like a comment
- DELETE /api/comments/:id/likes – Unlike a comment

## Features
- Fully RESTful API adhering to standard HTTP methods and status codes
- Modular architecture with clear separation of controllers, routes, and models
- In-memory mock data store for rapid prototyping without database setup
- Core social features: liking, commenting, following/unfollowing
- Easy-to-configure environment with .env support
- Prepared for seamless integration with frontend frameworks like Next.js
- Middleware for logging (Morgan) and CORS support for cross-origin requests

## Technologies
- **Node.js:** JavaScript runtime environment
- **Express.js:** Minimal and flexible web framework
- **CORS:** Enable cross-origin resource sharing
- **Morgan:** HTTP request logger middleware
- **dotenv:** Environment variable management
- **body-parser:** Middleware to parse incoming request bodies
- **Nodemon:** Development utility for automatic server restarts

## Conclusion
- This TikTok-style backend REST API provides a solid foundation for building scalable and modular social media applications. It demonstrates best practices in API design, including resource-oriented routing, proper use of HTTP methods, and modular code organization. Designed for quick prototyping, it can be extended with persistent storage, authentication, and advanced features to support production-ready applications.

## Acknowledgments
- I sincerely thank my instructor and classmates for their guidance and support throughout this project. I also extend my gratitude to the open-source community and the maintainers of Node.js and Express.js for creating robust tools that enabled this development. Additionally, the wealth of online tutorials and resources greatly assisted my learning of RESTful API principles and best practices.