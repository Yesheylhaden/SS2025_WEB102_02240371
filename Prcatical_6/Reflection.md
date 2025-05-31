# Reflection: Token-Based Authentication (Email & Password)

## Main Concepts Applied:

- **Authentication and Authorization:** Implemented a secure login system using email and password, backed by JWT-based session handling.
- **Password Security:** Applied hashing using `bcrypt` to safely store user passwords.
- **JWT Tokens:** Generated and verified JSON Web Tokens to control access to protected routes.
- **Middleware in Hono:** Used Hono's middleware to protect API routes by verifying tokens.
- **Database Interaction with Prisma:** Managed user and account records with a clean and type-safe Prisma schema.
- **RESTful API Design:** Structured endpoints for registration, login, and access control in a REST-compliant way.

---

## Things I Learned:

- How to use **bcrypt** to hash passwords securely and validate them during login.
- How to generate and decode **JWT tokens** for authentication, including token expiry and signature verification.
- Practical use of **middleware** in the Hono framework to protect routes.
- How to design a **relational schema** in Prisma and maintain referential integrity.
- Error handling using Hono's built-in **HTTPException** class for clean and consistent API responses.
- How token-based systems differ from session-based authentication in scalability and statelessness.

---

## Challenges and Solutions:

- **Challenge:** Hashing passwords correctly and avoiding login errors due to mismatched hashes.  
  **Solution:** Debugged bcrypt usage and ensured the `hashedPassword` was properly stored and compared during login.

- **Challenge:** Misconfigured or missing JWT secret causing token verification to fail.  
  **Solution:** Set the correct JWT secret in environment variables and validated token handling using test tokens.

- **Challenge:** Prisma schema issues when linking `User` and `Account` models.  
  **Solution:** Reviewed relational schema documentation and adjusted model relations, then applied clean migrations.

- **Challenge:** Protecting routes consistently without duplicating code.  
  **Solution:** Wrote a reusable Hono middleware to check for a valid JWT on protected endpoints.

---

## Conclusion:

- This practical taught me how to build a fundamental authentication system using modern web development tools like Bun, Hono, and Prisma. I now understand the importance of hashing passwords, using tokens for stateless authentication, and protecting sensitive routes through middleware. The project has improved my ability to work with secure backends and given me confidence in applying these techniques to larger, real-world applications.