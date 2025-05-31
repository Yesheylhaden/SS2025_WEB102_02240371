#  Token-based Authentication (Email & Password)

## Overview:
- This practical demonstrates how to implement a secure authentication and authorization system in a web application using **email/password login** combined with **JWT tokens**. It features hashed password storage, route protection, and account creation with default values. The project uses the ultra-fast **Bun** runtime and the **Hono** framework for performance and simplicity.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Conclusion](#conclusion)
- [Acknowledgment](#acknowledgment)

---

## Installation
1. **Clone the repository**
- git clone <https://github.com/Yesheylhaden/SS2025_WEB102_02240371.git>

2. Install dependencies
- bun install

3. Configure Prisma schema
model User {
  id           String    @id @default(uuid())
  email        String    @unique
  hashedPassword String
  Account      Account[]
}

## Usage:

### Registration:
- Endpoint: POST /register
- Description: Create a new user with a hashed password and a default account balance.

### Login:
- Endpoint: POST /login
- Description: Authenticates a user and returns a JWT token.

### Accessing Protected Routes
- Endpoint: GET /protected/account/balance
- Description: Requires a valid JWT token o fetch the authenticated user's account balance.

## Features:

- Secure password hashing with bcrypt
- Unique email validation with clear error handling
- Token-based authentication using JWT
- Middleware-based route protection for secure endpoints
- Automatic account creation with a default balance
- Consistent error handling using Hono HTTP exceptions

## Technologies Used:

- **Bun:** Modern JavaScript runtime for ultra-fast execution
- **Hono:** Lightweight web framework built for speed
- **Prisma ORM:** Type-safe, modern ORM for PostgreSQL and other databases
- **JWT (jsonwebtoken):** Token-based authentication for session management
- **bcrypt:** Industry-standard password hashing library

## Conclusion:

- This project illustrates the core concepts of modern authentication and authorization, combining secure password handling with JWT-based session control. Built on a high-performance stack (Bun + Hono), it serves as a solid foundation for building secure and scalable APIs. The implementation ensures sensitive data is well-protected and access to resources is tightly controlled.

## Acknowledgments:

- I would like to express my gratitude to my instructor and peers for their continuous guidance and support. Their insights on authentication, Prisma ORM, and API security greatly enriched the development of this project. Special thanks to the developers of Bun, Hono, and Prisma for providing such powerful and well-documented tools.