# Contact Management App

## Overview
The Contact Management App is a backend service providing APIs for managing user contacts. It allows registered users to create, read, update, and delete their personal contacts securely. 
The backend is built using Node.js and Express, and with MongoDB as the database. 
The app also implements user authentication via JWT tokens, ensuring that only logged-in users can access and manage their own contacts.

## Key Features
- **User Registration**: Users can sign up for an account and securely store their credentials using hashed passwords.
- **User Login**: After registering, users can log in to receive a JWT access token.
- **JWT Authentication**: The app uses JSON Web Tokens (JWT) to protect private API endpoints.
- **CRUD Operations for Contacts**: Users can manage their contacts (create, read, update, delete) but are restricted from accessing contacts created by other users.
- **Error Handling**: Proper error messages and status codes are provided for all possible issues, like authentication failure or missing input data.
- **Password Hashing**: User passwords are securely hashed using Bcrypt before being stored in the database.

## Technology Stack
- **Node.js**: Provides the server environment for the app.
- **Express.js**: A lightweight framework for building web applications and APIs.
- **MongoDB**: NoSQL database used to store user and contact information in JSON-like documents.
- **Mongoose**: ODM library to model and interact with MongoDB collections.
- **Bcrypt**: For secure password hashing.
- **JWT (Jsonwebtoken)**: Used for user authentication and authorization.
- **Nodemon**: Development tool that automatically restarts the server on file changes.

## API Endpoints
### User Routes:
- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: User login, returns a JWT token.
- `GET /api/users/current`: Get current logged-in user information (protected route).

### Contact Routes (Protected):
- `GET /api/contacts`: Get all contacts for the current user.
- `POST /api/contacts`: Create a new contact.
- `GET /api/contacts/:id`: Get a specific contact by ID.
- `PUT /api/contacts/:id`: Update an existing contact.
- `DELETE /api/contacts/:id`: Delete a contact.

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB set up locally or via MongoDB Atlas

### Setup Instructions
1. Clone the repository.
2. Navigate into the project directory.
3. Install the required dependencies:
4. Set up environment variables by creating .env file in the root directory
5. Start the development server
