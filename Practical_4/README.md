# Practical_4: Connecting TikTok to PostgreSQL with Prisma ORM(tiktok server)

## Overview:

- This practical demonstrates how to integrate a PostgreSQL database into a TikTok-inspired backend using **Prisma ORM**. It covers persistent data modeling, secure JWT-based authentication, password hashing with bcrypt, and establishing relational connections between users, videos, comments, likes, and follows. The project upgrades a mock-data backend to a fully connected, scalable, and secure system with real database support.

## Table of Contents:

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

## Installation:

### 1. Clone the repository
git clone <https://github.com/Yesheylhaden/SS2025_WEB102_02240371.git>

### 2. Install dependencies
- npm install

### 3. Configure PostgreSQL
#### Access PostgreSQL:
- sudo -u postgres psql
#### Create a new database and user:
- CREATE DATABASE tiktok_db;
- CREATE USER tiktok_user WITH PASSWORD 'your_password';
- GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
\q

##  Usage:

### Authentication
- Register: POST /api/register
- Login: POST /api/login
## Video APIs
- POST /api/videos – Upload a video (requires auth)
- GET /api/videos – Get all videos
## Comment APIs
- POST /api/comments – Comment on a video
- GET /api/comments/:videoId – Get comments for a video
## Like & Follow APIs
- POST /api/videos/:id/like – Like a video
- POST /api/users/:id/follow – Follow a user

## Features:

- PostgreSQL database integration with Prisma ORM
- Secure JWT-based authentication
- Password hashing using bcrypt
- Modular MVC architecture for scalable development
- Relational data modeling with Prisma schema (Users, Videos, Comments, Likes, Follows)
- Database seeding with sample data
- Middleware-protected routes for authorization
- RESTful API design with clean route separation

## Technologies
- **Node.js:** JavaScript runtime for backend development
- **Express.js:** Lightweight web framework
- **PostgreSQL:** Open-source relational database
- **Prisma ORM:** Type-safe database access and schema migration
- **JWT (jsonwebtoken):** Token-based authentication
- **bcrypt:** Secure password hashing
- **dotenv:** Environment variable management
- **Postman:** API testing and debugging tool

## Conclusion:

- This project showcases how to build a real-world, full-featured backend for a TikTok-like application. By incorporating PostgreSQL with Prisma ORM and implementing authentication, it transitions from in-memory storage to a persistent, scalable architecture. The use of relational models and secure route protection makes the backend production-ready and ideal for further frontend integration. development with real-world data persistence and security practices.

## Acknowledgments:

- I would like to express my sincere gratitude to Mrs. Sonam Yangchen for her continuous support, mentorship, and for providing the reference repository that served as a foundation for this practical. I also thank my classmates for their valuable collaboration and support throughout the development process. Special thanks to the open-source community for providing powerful tools and documentation that made this integration possible.