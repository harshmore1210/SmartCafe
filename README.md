☕ SmartCafe – React Project

SmartCafe is a modern React-based web application that allows users to browse a menu, add items to a cart, and make payments securely using Firebase integration.
It provides a simple and smooth café ordering experience from browsing to checkout.

🚀 Features

🏠 Home Page – Clean landing page with café introduction

📋 Menu Page – Displays food & drink items dynamically

🛒 Cart Page – Add, remove, and update items

💳 Payment Gateway – Secure payments handled via Firebase

🔥 Firebase Integration – Real-time data and authentication support

📱 Responsive UI – Works on mobile and desktop

🛠️ Tech Stack

Frontend: React.js, React Router DOM
Backend / Database: Firebase
State Management: useState / Context API
Styling: CSS / Tailwind / Styled Components (as per your setup)

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/yourusername/smartcafe.git
cd smartcafe


Install dependencies

npm install


Create a Firebase project at https://console.firebase.google.com

Add your Firebase configuration to a .env file or in your Firebase setup file:

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};


Start the development server

npm start

🧠 What I Learned

Integrating Firebase for authentication and payments

Managing global state for cart functionality

Building multi-page React apps with routing

Designing responsive layouts and clean UI flow


👨‍💻 Author

Harsh More,
React / MERN Stack Developer
