# Reflection on REST API Design and Implementation (TikTok Server)

## Main Concepts Applied:

- **RESTful API Design:** Applied REST principles by structuring endpoints around resources (users, videos, comments, likes, followers) with appropriate HTTP methods (GET, POST, PUT, DELETE).
- **Modular Architecture:** Organized the project into controllers, routes, and models to separate concerns and improve maintainability.
- **Middleware Usage:** Implemented middleware such as Morgan for logging and CORS for cross-origin requests to enhance security and debugging.
- **Mock Data Handling:** Used in-memory mock data to simulate backend behavior, enabling rapid prototyping without database dependency.
- **Environment Configuration:** Managed environment variables using `.env` files to allow flexible and secure configuration.
- **API Integration Readiness:** Designed the API to be compatible with frontend frameworks like Next.js for smooth integration.

## Things I Learned:

- How to design and implement RESTful APIs following best practices that enhance scalability and clarity.
- The importance of clean code organization in backend development through separation of concerns.
- Using middleware effectively to handle cross-cutting concerns such as logging, security, and CORS.
- Managing asynchronous operations and error handling in Express.js to build robust APIs.
- How to simulate real-world backend functionality using mock data for initial development phases.
- The workflow of integrating backend APIs with frontend frameworks, emphasizing API readiness.

## Challenges and Solutions:

- **Challenge:** Managing state and data consistency without a persistent database.  
  **Solution:** Used in-memory mock data structures to simulate database operations, understanding limitations while focusing on API logic.

- **Challenge:** Ensuring RESTful design adherence for complex social features like likes, comments, and follows.  
  **Solution:** Thoroughly planned endpoint routes and HTTP methods following REST conventions and adjusted as needed to maintain clarity.

- **Challenge:** Handling cross-origin requests during frontend-backend integration.  
  **Solution:** Implemented CORS middleware and configured it appropriately to enable secure and functional cross-origin communications.

- **Challenge:** Debugging asynchronous operations and ensuring proper error propagation.  
  **Solution:** Leveraged Express error-handling middleware and tested endpoints with tools like Postman to verify correct responses.

## Conclusion:

- This project has been a valuable learning experience in building a scalable and modular RESTful API backend for a social media application. Applying core concepts such as REST design, middleware, and modular architecture helped me understand the essential building blocks of backend development. Despite challenges with state management and asynchronous handling, I was able to implement effective solutions that mirror real-world API behaviors. Moving forward, I am confident in extending this project with persistent storage, authentication, and further enhancements to support production-grade applications.