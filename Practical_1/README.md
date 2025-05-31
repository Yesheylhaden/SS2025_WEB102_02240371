#  Practical_1: Designing and Implementing RESTful API Endpoints

## Overview:

- This project is a backend implementation of a RESTful API for a simplified Instagram-like social media platform using Node.js and Express.js. It demonstrates clean API design, proper HTTP method usage, token-based authentication, error handling, and middleware implementation following industry best practices.

---

## Table of Contents

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

---

## Installation:

1. **Clone the Repository**
   git clone <https://github.com/Yesheylhaden/SS2025_WEB102_02240371.git>
   cd SOCIAL_MEDIA_APPS

2. **Install Dependencies**
npm install

3. **Environment Setup**
PORT=3000

## Usages:

Sample Endpoints
- GET /users – List all users
- POST /users – Create a new user
- GET /posts – Retrieve all posts
- PUT /posts/:id – Update a post
- DELETE /comments/:id – Delete a comment

## Features:

- RESTful design with standard HTTP methods (GET, POST, PUT, DELETE)
- Token-based authentication using header Authorization: Bearer <token>
- Middleware-based content negotiation for JSON, HTML, etc.
- Secure headers via Helmet
- CORS enabled for cross-origin support
- HTTP logging using Morgan
- Mock data support for rapid testing (no database required)
- Centralized error handler with async wrapper utility
- Basic static API documentation

## Technologies:

- Node.js – JavaScript runtime
- Express.js – Web framework
- Morgan – HTTP request logging
- Helmet – Security HTTP headers
- CORS – Enable cross-origin requests
- nodemon – Auto-reload during development
- dotenv – Manage environment variables

## Conclusion:

- This project demonstrates the core principles of building a secure, scalable, and well-structured RESTful API using Node.js and Express.js. It highlights essential backend development practices such as proper endpoint design, the use of HTTP methods, content negotiation, centralized error handling, and modular code organization. By incorporating middleware for security, logging, and token-based authentication, the project lays a strong foundation for real-world API development. It is a valuable learning experience for understanding how to create maintainable APIs that adhere to industry standards and best practices.

## Acknowledgments:

- I would like to express my sincere gratitude to my instructor for their continuous guidance, support, and valuable feedback throughout this project. I am also thankful to my peers for their collaboration and encouragement during the development process. A special thanks to the developers and contributors of open-source tools and libraries such as Node.js, Express.js, Morgan, Helmet, and others that played a crucial role in building this API. Additionally, I appreciate the numerous online resources, documentation, and developer communities that provided insights and best practices for creating robust and secure RESTful APIs.