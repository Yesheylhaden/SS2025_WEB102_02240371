# Implementing Cloud Bucket Storage with Supabase (Tiktok server)

## Overview:

- This practical focuses on enhancing a TikTok-style web application by migrating from local file storage to **Supabase Storage**, enabling scalable, secure, and efficient handling of user-uploaded videos and thumbnails. With cloud storage and CDN support, the application gains improved reliability, performance, and access control.

## Table of Contents:

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

## Installation:

### Backend Setup
1. Install Supabase SDK
2. Configure Supabase Client (src/lib/supabase.js)
3. Add Environment Variables in .env
4. Update Prisma Schema and Migrate:

### Frontend Setup
1. Install Supabase SDK
2. Configure Supabase Client
3. Add Environment Variables in .env.local

## Usage:

**Uploading Files:**
- Users can upload videos and thumbnails directly from the frontend UI.
- Uploaded media is stored in Supabase buckets.
- Metadata and file paths are recorded in the database via Prisma.

**Serving Videos:**
- Videos and thumbnails are streamed through Supabase’s global CDN.
- Access is managed via Supabase RLS (Row-Level Security) policies.

**Testing:**
- Use frontend upload components to test the upload flow.
- Use Supabase dashboard and database logs to verify integration.
- Run seeding and migration scripts to simulate production readiness.

## Features:

- Direct uploads to Supabase from the client-side
- CDN-based streaming for videos and thumbnails
- Access control via Supabase authentication policies
- Seamless transition from local file system to cloud storage
- Clean schema updates via Prisma migrations
- Scalable, secure, and maintainable media storage architecture

## Technologies:

- **Supabase Storage:** Cloud storage with access policies and CDN delivery
- **PostgreSQL:** Database management via Supabase
- **Prisma ORM:** Schema modeling and database migration
- **Node.js & Express.js:** Backend runtime and API layer
- **Next.js:** React-based frontend framework
- **JavaScript (ES6):** Application logic
- **JWT & bcrypt:** Secure user authentication and password handling

## Conclusion:

- By integrating Supabase Storage, the TikTok application transitions from local file handling to a robust, cloud-native solution. This upgrade improves scalability, ensures secure access to media, and leverages CDN performance for seamless video playback. The migration enhances both developer experience and end-user performance in real-world usage.

## Acknowledgment:

- I would like to sincerely thank my instructor Mrs. Sonam Yangchen for her constant support, and my classmates for their collaboration. Special thanks to the open-source communities behind Supabase, Prisma, and Node.js, whose tools and documentation were instrumental in completing this practical successfully.