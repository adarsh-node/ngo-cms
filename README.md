# NGO CMS

A full-stack NGO website and content management system built with the MERN stack.

The project provides a public-facing NGO website where visitors can explore programs, events, gallery content, and news, along with a protected admin dashboard for managing website content and contact messages.

## Live Demo

- **Frontend:** https://ngo-cms-tau.vercel.app/
- **Admin Login:** https://ngo-cms-tau.vercel.app/admin/login
- **Backend API:** https://ngo-cms-nyxu.onrender.com/

> The backend is deployed on Render's free tier and may take a few seconds to respond after a period of inactivity.

## Features

### Public Website

- Responsive NGO website
- Home page with impact statistics
- Programs listing
- Events listing
- Gallery
- News listing
- Individual news details
- Contact form
- Donation page
- Responsive navigation and layouts
- Scroll-to-top navigation behavior
- Dynamic content loaded from REST APIs

### Admin CMS

Protected admin dashboard with JWT authentication.

Administrators can:

- Log in with email and password
- View dashboard statistics
- Create programs
- Edit programs
- Delete programs
- Create events
- Edit events
- Delete events
- Create gallery entries
- Edit gallery entries
- Delete gallery entries
- Create news articles
- Edit news articles
- Delete news articles
- View contact messages
- View individual messages
- Mark messages as read/unread
- Delete messages
- Log out
- Maintain authentication across page refreshes

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

## Architecture

The application follows a client-server architecture.

```text
React Client
(Vite + Tailwind)
       |
       | REST API
       v
Express / Node.js
    REST API
       |
       | Mongoose
       v
MongoDB Atlas
```

## Authentication

The admin CMS uses JWT-based authentication.

- Admin login with email and password
- Passwords hashed using bcrypt
- JWT tokens used for authentication
- Protected admin routes
- Backend authentication middleware
- Authentication state persisted across page refreshes

Protected API requests send the JWT using:

```text
Authorization: Bearer <token>
```

## Project Structure

```text
ngo-cms/
├── client/        # React frontend
│   └── src/
│       ├── api/
│       ├── components/
│       ├── context/
│       ├── pages/
│       └── routes/
│
├── server/        # Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
├── .gitignore
└── README.md
```

## API Overview

The backend provides RESTful API endpoints for the main CMS resources.

| Resource | Public Access | Admin Access |
|----------|---------------|--------------|
| Programs | Read | Create, Update, Delete |
| Events | Read | Create, Update, Delete |
| Gallery | Read | Create, Update, Delete |
| News | Read published | Create, Update, Delete |
| Messages | Create | Read, Update, Delete |
| Authentication | Login | Protected operations |
| Dashboard | — | Statistics |

## Environment Variables

### Client

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

### Server

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Never commit `.env` files or secret credentials to GitHub.

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/adarsh-node/ngo-cms.git
cd ngo-cms
```

### 2. Setup the backend

```bash
cd server
npm install
```

Create the `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

### 3. Setup the frontend

Open another terminal:

```bash
cd client
npm install
```

Create:

```text
client/.env
```

Add:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

## Admin Routes

```text
/admin/login
/admin
/admin/programs
/admin/events
/admin/gallery
/admin/news
/admin/messages
```

Admin routes are protected on the frontend using React Router and on the backend using JWT authentication middleware.

## Deployment

### Frontend

The React application is deployed using Vercel.

**Production:**  
https://ngo-cms-tau.vercel.app/

### Backend

The Express API is deployed using Render.

**Production API:**  
https://ngo-cms-nyxu.onrender.com/

### Database

MongoDB Atlas is used as the production database.

## Security

The project includes:

- JWT authentication
- Password hashing with bcrypt
- Protected admin API routes
- Environment variables for sensitive configuration
- Frontend protected routes
- Backend authentication middleware
- `.env` files excluded from Git

## Future Improvements

Possible future improvements include:

- Admin settings page
- Change email/password functionality
- Forgot-password and password-reset flow
- Team member management
- Cloudinary image uploads
- Role-based admin permissions
- Improved CORS configuration
- Rate limiting
- Security headers
- Rich text editor for news content
- Analytics dashboard

## Author

**Adarsh**

GitHub:  
https://github.com/adarsh-node