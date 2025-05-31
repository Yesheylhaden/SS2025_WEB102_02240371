# Reflection on TikTok Server with PostgreSQL and Prisma ORM

## Main Concepts Applied:

- **Database Integration**: Migrating from mock data to a fully structured PostgreSQL relational database.
- **ORM Usage (Prisma)**: Using Prisma for defining schemas, managing migrations, and querying data in a type-safe manner.
- **Authentication and Authorization**: Implementing secure login and registration using JWT for session management and bcrypt for password hashing.
- **MVC Architecture**: Structuring the backend into Models, Controllers, and Routes for better code organization and scalability.
- **Relational Modeling**: Defining relationships among users, videos, comments, likes, and follows to reflect real-world social media behavior.
- **Environment and Middleware Configuration**: Using environment variables and Express middleware for route protection and configuration.

---

## Things I Learned:

- **Setting Up PostgreSQL**: Learned how to create and configure a PostgreSQL database, user roles, and access privileges using the psql CLI.
- **Using Prisma ORM**: Understood how Prisma simplifies database interaction, schema management, and migrations.
- **Data Relationships**: Learned how to define and query one-to-many and many-to-many relationships using Prisma.
- **Security Practices**: Learned to hash passwords securely using bcrypt and manage user sessions through JWT tokens.
- **API Testing**: Gained hands-on experience using Postman to test API endpoints and debug HTTP requests.
- **Seeding Databases**: Learned how to write and execute seed scripts to populate test data for development and testing.

---

## Challenges and Solutions:

- **Challenge:** Initial difficulty in understanding how Prisma migrations work.  
  **Solution:** Referred to Prisma documentation and practiced with multiple migration and rollback scenarios to gain clarity.

- **Challenge:** Managing environment variables securely across the project.  
  **Solution:** Used the `dotenv` package to store sensitive credentials in a `.env` file and ensured it was excluded from version control.

- **Challenge:** Establishing correct relations between models such as users, videos, comments, likes, and follows.  
  **Solution:** Reviewed relational database design principles and tested queries to ensure relationships were properly defined in the Prisma schema.

- **Challenge:** Handling authentication issues such as invalid JWT tokens and bcrypt password mismatches.  
  **Solution:** Implemented proper input validation, structured error handling, and added JWT verification middleware to secure routes.

- **Challenge:** Debugging Prisma errors caused by modifying models after migrations.  
  **Solution:** Resolved by using `npx prisma migrate dev` and `prisma db push` commands correctly, and resetting the database when necessary.

## Conclusion:

- This project was a significant step forward in my understanding of backend development using Node.js, Express, PostgreSQL, and Prisma. It helped me transition from basic in-memory data storage to robust relational database handling. I also deepened my knowledge of authentication, data modeling, and the importance of a modular backend architecture. Overall, this experience has equipped me with practical skills necessary for building scalable, secure, and maintainable backend systems in full-stack applications.