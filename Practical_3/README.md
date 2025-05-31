# File Upload on the Server Application

## Overview:
- This project implements a complete backend file upload system using Node.js and Express, integrated with a React/Next.js frontend. It demonstrates secure handling of multipart form data, file validation and storage with Multer, and a seamless client-server upload flow including error handling and real-time progress tracking.

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

### 1. Clone the Repository
git clone <https://github.com/Yesheylhaden/SS2025_WEB102_02240371.git>

### 2.Install Dependencies
- npm install

## Usages:

### File Upload Flow
- Select or drag-and-drop a PDF file.

**Observe:**
- Real-time progress bar updates.
- File type and size validation.
- Uploaded files saved to the /uploads directory.
- Clear error messages displayed for invalid files.

### Upload Endpoint
- POST /api/upload
- Accepts multipart/form-data
- Field: file
**Validates:**
- File type (application/pdf)
- Size limit (configurable via Multer)

## Features:

- Drag-and-drop support for PDF files.
- Strict file validation for type and size.
- Secure file storage to a local /uploads directory.
- CORS enabled for frontend-backend communication.
- Real-time upload progress tracking using Axios.
- Detailed error messages for invalid uploads.

## Technologies:

- **Node.js:** JavaScript runtime environment for scalable backend development.
- **Express.js:** Minimal and flexible web framework.
- **Multer:** Middleware to handle multipart/form-data for file uploads.
- **CORS:** Enables Cross-Origin Resource Sharing.
- **Morgan:** HTTP request logging middleware.
- **dotenv:** Loads environment variables from .env files.
- **React + Next.js:** Frontend framework supporting server-side rendering.
- **Axios:** HTTP client used for file uploads with progress tracking.

## Conclusion:

- This project provides a comprehensive guide to building a modern file upload solution that combines a secure, well-validated Node.js backend with a responsive React/Next.js frontend. It covers all crucial aspects from backend setup and middleware usage to frontend integration and user experience with progress feedback, making it suitable as a foundation for production-grade file handling in web applications.

## Acknowledgments:

- I would like to sincerely thank our tutor Mrs. Sonam Yangchen for providing the base repository Backend_Practicals, which served as a strong foundation and reference for this project. Her guidance greatly helped me understand important backend concepts such as Express.js, middleware, and secure file handling. I also appreciate the open-source community and all the documentation and tutorials that supported my learning journey.