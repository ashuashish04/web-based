# 🏨 Hotel Booking Web Application

## 📌 Description
This is a full-stack hotel booking web application where users can register, login, and book hotel rooms. Each user has a personal dashboard to manage bookings.

---

## 🚀 Features
- User Registration & Login
- JWT Authentication
- Room Booking System
- User Dashboard
- View & Cancel Bookings
- Invoice Download (Text format)

---

## 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: JWT

---

## 📂 Project Structure
- /models → Database models
- /routes → API routes
- /middleware → Auth middleware
- server.js → Main backend server

---

## 🔐 Authentication Flow
- User logs in
- Server generates JWT token
- Token stored in localStorage
- Token sent with every request
- Backend verifies user

---

## 📊 Database
MongoDB Atlas is used to store:
- Users
- Bookings

---

## ▶️ How to Run
1. Clone repository
2. Run `npm install`
3. Add `.env` file (MONGO_URI, JWT_SECRET)
4. Run `node server.js`

---

## 👨‍💻 Author
Your Name
