# Porter-like MERN Application

A full-stack web application for managing porter/delivery requests with separate customer and admin interfaces.

## Features

### Customer Features
- User registration and login
- Create delivery requests (pickup address, drop address, weight, notes)
- View personal request history
- Track request status (pending, assigned, in-transit, delivered, cancelled)

### Admin Features
- Secure admin login
- View all customer requests in dashboard
- Update request status
- View customer details (name, phone, addresses)

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT for authentication
- Bcrypt for password hashing

### Frontend
- React.js
- React Router for navigation
- Axios for API calls
- Inline CSS styling

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in backend folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start backend server:
```bash
node server.js
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start frontend:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## Usage

### Customer Flow
1. Register a new account at `/customer/register`
2. Login at `/customer/login`
3. Create delivery requests
4. View request status and history

### Admin Flow
1. Login at `/admin/login`
2. View all requests in dashboard
3. Update request status using dropdown

### Default Admin Credentials
- Email: admin@porter.com
- Password: admin123

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Requests
- `POST /api/requests` - Create new request (Customer)
- `GET /api/requests/my-requests` - Get customer's requests
- `GET /api/requests/all` - Get all requests (Admin)
- `PUT /api/requests/:id/status` - Update request status (Admin)

## Project Structure
```
porter-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── requestController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Request.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── requestRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminLogin.js
│   │   │   ├── CustomerHome.js
│   │   │   ├── CustomerLogin.js
│   │   │   ├── CustomerRegister.js
│   │   │   └── CustomerRequests.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## Security Features
- JWT token-based authentication
- Password hashing with bcrypt
- Role-based access control
- Protected routes

## Future Enhancements
- Real-time status updates using WebSockets
- Payment integration
- SMS/Email notifications
- Route optimization
- Delivery tracking on map

## Author
Taniya Keswani

## License
MIT