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
- 🔌 **Fully Functional REST API** built with Express.js  
- 🔐 **Rate Limiting with Upstash Redis** to prevent abuse  
- 📱 **Completely Responsive Design** for all devices  
- ⚡ **Vite-powered React Frontend** for blazing-fast development  
- 📦 **MongoDB Atlas** for cloud database storage  
- 🧩 **Reusable Components** and clean project structure  

---

## 🖼️ Overview 

<img width="1080" height="1080" alt="Neon Retro Stars Marketing Mockup Website Instagram Post" src="https://github.com/user-attachments/assets/1ad0fada-f1ac-4730-b238-a7cddb07b7dd" />


---

## 🚀 Getting Started

### 🔐 Environment Variables Setup

1. Create a `.env` file in the **backend** folder:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_atlas_connection
   REDIS_URL=your_upstash_redis_url
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
   git clone https://github.com/your-username/mern-noteboard.git
   cd mern-noteboard
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
