# 📱 Book Order Frontend (React Native + Expo)

This is the mobile frontend app for the Book Listing and Ordering system, built using **React Native** and **Expo**.

It connects to a Django REST API to fetch books and place orders.

---

## 🚀 Features

- 📚 Displays list of books fetched from the backend API
- 📝 Tap a book to place an order with customer name
- ✅ Sends POST request to `/order` endpoint
- 🔔 Shows success confirmation on order

---

## ⚙️ Tech Stack

- React Native (with Expo)
- TypeScript
- Fetch API for integration
- VS Code + Metro Bundler

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/book-order-frontend.git
cd book-order-frontend
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npx expo start
📱 Scan the QR code using Expo Go app on your Android/iOS device.

🌐 Backend API Requirements
Make sure your Django backend is running at:

perl
Copy
Edit
http://<your-local-ip>:8000/
Update the base URL in your app code (usually in a constants file or fetch() call) to use:

cpp
Copy
Edit
http://192.168.X.X:8000/  ← Replace with your actual local IP
📄 Screens Implemented
Home screen with book list

Order screen for entering customer name and submitting

Success message after order placement

✅ Assignment Checklist
✅ React Native frontend with Expo

✅ GET /books integration

✅ POST /order integration

✅ Clean folder structure and code

✅ Fully tested and working

✨ Author
Pratima Datta Ghosh
📧 pratimadattaghosh@gmail.com
📱 +91 8582802976


