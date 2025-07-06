# 🐶 Woofville

**Woofville** is a modern dog photo discovery app built with **React**, powered by **Firebase**, and styled with **SCSS**.  
Users can browse random dog photos, like them, and have their favorites persist across devices thanks to Firebase Realtime Database.

Live Demo: [woofville-645b9.web.app](https://woofville-645b9.web.app)  
Repo: [GitHub](https://github.com/krestnoikotec/-Woofville)

---

## 📚 Table of Contents

- [🚀 Features](#-features)
- [🧠 Tech Stack](#-tech-stack)
- [🛠️ Getting Started](#️-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔗 Firebase Setup](#-firebase-setup)
- [📜 License](#-license)
- [✨ Author](#-author)

---

## 🚀 Features

- 🔐 **User authentication** via Firebase (Sign up, Sign in, Sign out)
- ❤️ **Like system** tied to authenticated users and synced with Firebase Realtime Database
- 🐾 **Random dog photo feed** via public API
- 📱 **Responsive UI** with SCSS modules & basic animations (Framer Motion)
- 🗂️ Modular code structure with reusable components and clean state management (Redux Toolkit)

---

## 🧠 Tech Stack

| Category         | Technologies                                 |
|------------------|----------------------------------------------|
| Languages        | JavaScript, SCSS, HTML                       |
| Frameworks       | React, Vite                                  |
| Firebase         | Auth, Realtime Database, Hosting             |
| Routing          | React Router                                 |
| State Management | Redux Toolkit                                |
| Animations       | Framer Motion                                |
| Tooling          | ESLint, Vite                                 |

---

## 🛠️ Getting Started

### 1. Clone the project
git clone https://github.com/krestnoikotec/-Woofville.git
cd Woofville
2. Install dependencies
npm install
or
yarn install
3. Run development server
npm run dev
or
yarn dev
Visit http://localhost:5173 to view the app.

📁 Project Structure
src/
├── assets/            # Static images & styles
├── components/        # Reusable UI components
├── features/          # Firebase logic (auth, DB)
├── pages/             # Page-level components (Home, Favorites, etc.)
├── redux/             # Redux slices & store config
├── utils/             # Helper functions
└── main.jsx           # App entry point
🔗 Firebase Setup
To run the project with your own Firebase instance:

Create a Firebase project at firebase.google.com

Enable Authentication → Email/Password

Enable Realtime Database

Add your Firebase config to firebase-config.js inside /features

// /features/firebase-config.js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  ...
};

📜 License
This project is open-source under the MIT License.

✨ Author
Created with 💻 and 🐶 by krestnoikotec
