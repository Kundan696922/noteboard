# 📝 NoteBoard – MERN Stack Note Taking App

**NoteBoard** is a simple and powerful **Full-Stack Note Taking App** built with the **MERN stack**.  
It lets you **create, edit, and delete notes** with ease, has a **fully functional REST API**, and demonstrates **Rate Limiting with Upstash Redis** — all wrapped in a **fully responsive UI**.

---

## 🚀 Demo

> 🌐 Live Demo: 👉 [View NoteBoard](https://noteboard-6618.onrender.com/)

---

## 🛠️ Tools Used

| Tool | Description |
|------|-------------|
| ![MongoDB](https://img.icons8.com/color/24/mongodb.png) **MongoDB** | NoSQL Database for storing notes |
| ![Express](https://img.icons8.com/ios/24/express-js.png) **Express.js** | Backend API framework |
| ![React](https://img.icons8.com/color/24/react-native.png) **React** | Frontend UI library |
| ![Node.js](https://img.icons8.com/color/24/nodejs.png) **Node.js** | Server-side JavaScript runtime |
| ![Redis](https://img.icons8.com/color/24/redis.png) **Upstash Redis** | Rate limiting & caching |
| ![TailwindCSS](https://img.icons8.com/color/24/tailwindcss.png) **TailwindCSS + DaisyUI** | Modern, responsive UI styling |
| ![VSCode](https://img.icons8.com/color/24/visual-studio-code-2019.png) **VS Code** | Code editor |

---

## 🌟 Features

- 📝 **Create, Edit, Delete Notes** with title and description
- 📌 Pin Notes to keep important notes at the top
- 🔍 Search Notes instantly by title
- 🔌 **Fully Functional REST API** built with Express.js
- 🔐 **Rate Limiting with Upstash Redis** to prevent abuse  
- 📱 **Completely Responsive Design** for all devices  
- ⚡ **Vite-powered React Frontend** for blazing-fast development  
- 📦 **MongoDB Atlas** for cloud database storage  
- 🧩 **Reusable Components** and clean project structure  

---

## 🖼️ Overview 

<img width="1280" height="720" alt="noteboard" src="https://github.com/user-attachments/assets/9b9b5d11-f2c1-415b-90a0-15ffab4c7a44" />

<img width="1280" height="720" alt="noteboard2" src="https://github.com/user-attachments/assets/01285c34-2ae9-4042-be9c-ae77a57472e5" />

<img width="1280" height="720" alt="noteboard3" src="https://github.com/user-attachments/assets/979c3ba3-d72d-47b9-9c0c-3b530fd43c46" />

<img width="1280" height="720" alt="noteboard4" src="https://github.com/user-attachments/assets/9258dfa7-d561-4cb8-8db3-a9d8e21a67bf" />

---

## 🚀 Getting Started

### 🔐 Environment Variables Setup

1. Create a `.env` file in the **backend** folder:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_atlas_connection
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   NODE_ENV=development
2. Add .env to .gitignore to keep it private.
3. Restart your dev server after setting these variables.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14+)
- **npm**
- **MongoDB** Atlas account
- **Upstash** Redis account (for rate limiting)

### Installation

 🧬 Clone the repository:
   ```bash
   git clone https://github.com/Kundan696922/noteboard.git
   cd noteboard
   ```

🔧 Run the Backend
   ```bash
   cd backend
   npm install
   npm run dev
   ```

💻 Run the Frontend
   ```bash
   cd frontend
   npm install
   npm run dev
