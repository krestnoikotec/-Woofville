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
- [🗄️ How Likes Are Stored in Firebase](#️-how-likes-are-stored-in-firebase)
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
```bash
git clone https://github.com/krestnoikotec/-Woofville.git
cd Woofville
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run development server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the app.

---

## 📁 Project Structure

```
src/
├── assets/            # Static images & styles
├── components/        # Reusable UI components
├── features/          # Firebase logic (auth, DB)
├── pages/             # Page-level components (Home, Favorites, etc.)
├── redux/             # Redux slices & store config
├── utils/             # Helper functions
└── main.jsx           # App entry point
```

---

## 🔗 Firebase Setup

To run the project with your own Firebase instance:

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
2. Enable Authentication → Email/Password
3. Enable Realtime Database
4. Add your Firebase config to `firebase-config.js` inside `/features`

```js
// /features/firebase-config.js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  ...
};
```

---

## 🗄️ How Likes Are Stored in Firebase

The like system is implemented per authenticated user. The Firebase Realtime Database structure looks like this:

```
usersLikes/
├── userId1/
│   ├── imageURL1: true
│   ├── imageURL2: true
├── userId2/
│   ├── imageURL3: true
```

- Each user has their own object under `usersLikes`
- Every key is the `imageURL` of a liked dog image
- Value is simply `true`
- To "unlike", the corresponding entry is removed

This allows:
- 🔄 Syncing likes across devices
- 👁️ Displaying already-liked images
- 🔘 Toggling like/unlike in real time

---

## 📜 License

This project is open-source under the [MIT License](./LICENSE).

---

## ✨ Author

Created with 💻 and 🐶 by [krestnoikotec](https://github.com/krestnoikotec)
