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

All liked dog photos are stored under the `likedDogs` node in Firebase Realtime Database.

### ✅ Structure Example

```
likedDogs/
├── userId1/
│   ├── 36TXlWMDf/
│   │   ├── id: "36TXlWMDf"
│   │   ├── name: "Akita"
│   │   ├── url: "https://cdn2.thedogapi.com/images/36TXlWMDf.jpg"
│   │   ├── breed: { ... }
│   │   ├── temperament: "Docile, Alert, Responsive, ..."
│   │   └── ...more dog data
├── userId2/
│   ├── SkM9sec47/
│   │   └── ...
```

Each user has their own nested object with:

- 🔑 Dog IDs as keys
- 📦 Full dog metadata as value (name, photo, breed, life span, etc.)

### ➕ Adding a like:
You save the dog’s full data object under `likedDogs/{userId}/{dogId}`

### ➖ Removing a like:
You remove the corresponding dog entry from `likedDogs/{userId}/{dogId}`

### 🧠 Benefit of this structure:

- Fast access to liked photos and dog data in one request
- Avoids additional API fetches when rendering favorites
- Easily expandable if you want to store more fields (e.g., date liked, tags, etc.)

---

## 📜 License

This project is open-source under the [MIT License](./LICENSE).

---

## ✨ Author

Created with 💻 and 🐶 by [krestnoikotec](https://github.com/krestnoikotec)
