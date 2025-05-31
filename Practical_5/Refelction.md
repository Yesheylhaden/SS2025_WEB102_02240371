# Reflection on Implementing Cloud Bucket Storage with Supabase (TikTok Server)

## Main Concepts Applied:

- **Cloud Storage Integration**: Replaced traditional local file storage with Supabase Storage for improved scalability, access control, and performance.
- **Supabase Client Setup**: Implemented secure communication between the frontend/backend and Supabase using environment variables and Supabase SDK.
- **Prisma Schema Migration**: Extended existing Prisma models to support Supabase file paths and handled schema migration effectively.
- **Video and Thumbnail Management**: Enabled direct uploads from the frontend and served content via Supabase's CDN.
- **Security Practices**: Applied Supabase's row-level security (RLS) to control access to files based on user authentication.

---

## Things I Learned:

- How to configure and use **Supabase Storage** in a full-stack web application.
- Best practices for handling **file uploads directly from the frontend** using signed URLs or SDK functions.
- How **Supabase CDN** improves media streaming speed and performance.
- The role of **Prisma ORM** in synchronizing cloud storage metadata with the PostgreSQL database.
- How to apply **role-based access policies** to protect uploaded media using Supabase RLS.
- Practical skills in **managing cloud environment variables** securely in `.env` and `.env.local`.

---

## Challenges and Solutions:

- **Challenge:** Understanding Supabase bucket structure and file access policies.  
  **Solution:** Read official Supabase documentation and experimented with policy rules via the Supabase dashboard.

- **Challenge:** Uploading large video files from the frontend and managing timeouts.  
  **Solution:** Resized sample videos for testing and configured Supabase storage settings for optimal upload limits.

- **Challenge:** Mapping Supabase storage file paths with Prisma models correctly.  
  **Solution:** Used consistent naming conventions and verified storage paths in both the database and frontend render logic.

- **Challenge:** Debugging access-denied errors due to missing or incorrect RLS policies.  
  **Solution:** Tested access rules with authenticated sessions and revised policy expressions in Supabase settings.

- **Challenge:** Coordinating frontend and backend Supabase clients using separate `.env` files.  
  **Solution:** Ensured consistent environment variable names and securely stored keys in their respective files.

---

## Conclusion:

- This practical helped me understand the real-world application of cloud storage in full-stack development. Migrating from local file handling to Supabase Storage not only improved the application's scalability and performance but also strengthened its security through access policies. I now feel more confident in integrating third-party cloud services into web applications and managing secure file upload workflows. This experience has provided me with valuable skills applicable to modern backend and frontend development.