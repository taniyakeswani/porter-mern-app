# Porter-like MERN Application

A full-stack delivery management application for managing porter/delivery requests with separate customer and admin interfaces. Available as both a web application and native Android mobile app.

## Available Versions

### Web Application
- Runs in browser on desktop/laptop
- Accessible at: `http://localhost:3000` (development)
- Full-featured customer and admin portals

### Android Mobile App
- Native Android application built with Capacitor
- Installable APK for Android devices
- Same features as web version
- Connects to deployed backend API

---

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

---

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

### Mobile
- Capacitor (web-to-native bridge)
- Android Studio (APK build tool)

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git
- Android device (for mobile app)

---

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

---

### Frontend (Web) Setup

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

---

### Android Mobile App Setup

#### Option A: Install Pre-built APK (For Users)

**Requirements:**
- Android device (Android 5.0 or higher)
- Internet connection

**Installation Steps:**

1. Download `app-debug.apk` from:
   - GitHub Releases: [Latest Release](https://github.com/taniyakeswani/porter-mern-app/releases)
   - Or Google Drive: [APK Link](your-google-drive-link-here)

2. Transfer APK to your Android phone via:
   - USB cable
   - Email attachment
   - Cloud storage (Google Drive, Dropbox)

3. On your Android phone:
   - Go to **Settings** > **Security**
   - Enable **"Install from unknown sources"** or **"Unknown sources"**
   
4. Open **Files** or **My Files** app on your phone

5. Navigate to **Downloads** folder

6. Tap on `app-debug.apk`

7. Tap **"Install"**

8. Once installed, tap **"Open"** to launch the app

**Note:** The mobile app connects to the deployed backend, so no local server setup is required on mobile.

---

#### Option B: Build APK from Source (For Developers)

**Prerequisites:**
- Android Studio installed
- Java Development Kit (JDK)

**Build Steps:**

1. Build React app:
```bash
cd frontend
npm run build
```

2. Sync with Capacitor:
```bash
npx cap sync android
```

3. Open in Android Studio:
```bash
npx cap open android
```

4. In Android Studio:
   - Click **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)**
   - Wait 2-5 minutes for build to complete
   
5. APK location:
```
frontend/android/app/build/outputs/apk/debug/app-debug.apk
```

6. Transfer APK to Android device and install using steps from Option A

---

## Usage

### Web Application

#### Customer Flow:
1. Open `http://localhost:3000/customer/login`
2. Click **"Register"** to create new account
3. Login with your credentials
4. Navigate to **"Create Request"**
5. Fill in pickup address, drop address, weight, and notes
6. Submit request
7. View your requests in **"My Requests"** section

#### Admin Flow:
1. Open `http://localhost:3000/admin/login`
2. Login with admin credentials:
   - Email: `admin@porter.com`
   - Password: `admin123`
3. View all customer requests in dashboard
4. Update request status using dropdown menu

---

### Mobile Application

#### Customer Usage:
1. Open **Porter App** on your Android device
2. Tap **"Register"** to create account
3. Login with your credentials
4. Tap button to create new delivery request
5. Enter pickup address, drop address, weight, and notes
6. Submit request
7. View all your requests with current status

#### Admin Usage:
1. Open app and tap **"Admin Login"**
2. Login with admin credentials:
   - Email: `admin@porter.com`
   - Password: `admin123`
3. View all customer requests in dashboard
4. Tap on any request to update its status

**Important:** Mobile app requires internet connection to communicate with the backend API.

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Requests
- `POST /api/requests` - Create new request (Customer)
- `GET /api/requests/my-requests` - Get customer's requests
- `GET /api/requests/all` - Get all requests (Admin)
- `PUT /api/requests/:id/status` - Update request status (Admin)

---

## Deployment

### Backend
- **Platform:** Render.com
- **Live URL:** `https://porter-backend-mtjy.onrender.com`
- **Database:** MongoDB Atlas (Cloud)
- **Status:** Production

### Frontend (Web)
- **Development:** `http://localhost:3000`
- **Can be deployed to:** Vercel, Netlify, GitHub Pages

### Mobile App
- **Distribution:** APK file via GitHub Releases or direct download
- **Installation:** Manual APK installation (not on Google Play Store)
- **Backend Connection:** Uses deployed backend URL

---

## Download APK

### Latest Version: v1.0.0

**APK Details:**
- **File Name:** `app-debug.apk`
- **Size:** 4.5 MB
- **Android Version:** 5.0 (API 21) or higher
- **Download From:**
  - GitHub Releases: [Download APK](https://github.com/taniyakeswani/porter-mern-app/releases)
  - Google Drive: [APK Link](your-link-here)

**Installation Instructions:** See "Android Mobile App Setup" section above

---

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
│   ├── capacitor.config.ts      # Capacitor configuration
│   ├── android/                 # Android project (not in Git)
│   └── package.json
├── .gitignore
└── README.md
```

**Note:** The `android/` folder is generated by Capacitor but is excluded from Git repository.

---

## Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Role-based access control
- Protected routes
- Environment variables for sensitive data
- CORS configuration

---

## Future Enhancements

- Real-time status updates using WebSockets
- Payment integration
- SMS/Email notifications
- Route optimization
- Delivery tracking on map
- Push notifications for mobile app
- iOS app version using Capacitor

---

## Troubleshooting

### Web App Issues

**Problem:** Backend not connecting
- **Solution:** Ensure backend server is running and MongoDB connection string is correct in `.env`

**Problem:** CORS errors
- **Solution:** Check CORS middleware configuration in `server.js`

### Mobile App Issues

**Problem:** App won't install on Android
- **Solution:** Enable "Install from unknown sources" in phone Settings > Security

**Problem:** Cannot connect to server
- **Solution:** Check internet connection. Mobile app requires internet to access backend API.

**Problem:** Login not working
- **Solution:** Verify backend is deployed and accessible at the configured URL

---

## Author

Taniya Keswani

**GitHub:** [github.com/taniyakeswani](https://github.com/taniyakeswani)

**Project Repository:** [porter-mern-app](https://github.com/taniyakeswani/porter-mern-app)

---

## License

MIT

---

## Acknowledgments

- Built as a full-stack MERN learning project
- Inspired by real-world delivery apps like Porter and Dunzo
- Uses Capacitor for web-to-native mobile conversion
- Deployed on Render.com and MongoDB Atlas

---

**Last Updated:** December 2025