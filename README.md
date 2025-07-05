


# Mentora

Mentora is a comprehensive Learning Management System (LMS) that provides separate interfaces for students and educators, enabling seamless course creation, enrollment, and learning experiences.

## Features

### For Students
- **Course Discovery**: Browse and search available courses
- **Course Enrollment**: Secure payment processing through Stripe integration
- **Video Learning**: Interactive video player with progress tracking
- **Learning Progress**: Track completion status across courses and lectures

### For Educators
- **Course Creation**: Create and structure courses with multiple chapters and lectures
- **Content Management**: Upload and organize educational content
- **Analytics Dashboard**: Monitor student engagement and course performance
- **Student Management**: Track enrollments and progress [1](#0-0) [2](#0-1) [3](#0-2) [4](#0-3) 

## Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications

### Backend
- **Node.js & Express** - Server runtime and web framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### Third-Party Services
- **Clerk** - Authentication and user management
- **Stripe** - Payment processing for course enrollments
- **Cloudinary** - Media storage and delivery [5](#0-4) [6](#0-5) [7](#0-6) [8](#0-7) 

## Project Structure

```
Mentora/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (student & educator)
│   │   ├── context/       # Global state management
│   │   └── App.jsx        # Main application component
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
└── server/                 # Express backend application
    ├── controllers/        # Request handlers
    ├── models/            # MongoDB data models
    ├── routes/            # API route definitions
    ├── middlewares/       # Custom middleware functions
    ├── configs/           # Configuration files
    └── server.js          # Main server entry point
``` [9](#0-8) [10](#0-9) [11](#0-10) 

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- Clerk account for authentication
- Stripe account for payment processing
- Cloudinary account for media storage

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the client directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. Start the development server:
```bash
npm run dev
``` [12](#0-11) [13](#0-12) 

## API Integration

The application integrates with external services through webhooks and APIs:

- **Clerk Webhooks**: Handle user authentication events
- **Stripe Webhooks**: Process payment confirmations and subscription updates
- **Cloudinary API**: Manage media uploads and transformations [14](#0-13) 

## Usage

1. **For Educators**: 
   - Sign up/Login through Clerk authentication
   - Access the educator dashboard to create and manage courses
   - Upload content and structure learning materials

2. **For Students**:
   - Browse available courses
   - Enroll in courses through secure Stripe payments
   - Access enrolled content through the video player interface

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Notes**: This README provides a comprehensive overview of the Mentora LMS project structure and setup instructions. The application features a modern React frontend with Vite, an Express/MongoDB backend, and integrates with Clerk for authentication, Stripe for payments, and Cloudinary for media management. The project is structured with clear separation between client and server code, making it easy to develop and maintain.
