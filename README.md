# 🚀 Modern Neo-Brutalist Portfolio Template | MERN Stack

A fully responsive, high-performance personal portfolio template built with the MERN stack (MongoDB, Express, React, Node.js). Engineered with a striking "Neo-Brutalist" UI using Tailwind CSS and Framer Motion for smooth, interactive animations. 

This repository serves as a complete, full-stack foundation for developers looking to showcase their work with a custom backend contact system.

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS, Framer Motion, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Security:** Helmet, Express Rate Limit, CORS

## ✨ Key Features
* **Neo-Brutalist Design:** Bold borders, high contrast, and sharp shadows for a unique, standout aesthetic that breaks away from standard corporate templates.
* **Smooth Animations:** Scroll spy navigation, hover effects, and page transitions powered by Framer Motion.
* **Modular Architecture:** Easily customizable React components for Skills, Experience, and Featured Projects.
* **Functional Backend Contact Form:** Securely processes and handles messages via the Express backend, writing directly to a MongoDB database.
* **Production-Ready Security:** Pre-configured with rate limiting to prevent spam and Helmet to secure HTTP headers.
* **Fully Responsive:** Flawless user experience across all desktop, tablet, and mobile devices.

## 💻 Local Setup
To run this project locally or use it as your own portfolio, follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/) installed
* A free [MongoDB Atlas](https://cloud.mongodb.com/) account or local MongoDB instance

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Mian-M-Jahanzaib/mern-portfolio.git](https://github.com/Mian-M-Jahanzaib/mern-portfolio.git)
   ```

2. Install Backend Dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install Frontend Dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables
Create a `.env` file in the `backend` directory. You will need to add your own MongoDB connection string:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
FRONTEND_URL=http://localhost:5173
```
*(Note: Never commit your `.env` file to version control.)*

### Running the Application
1. Start the Backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the Frontend development server (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

## 👨‍💻 Created By
**Mian Muhammad Jahanzaib**
* **LinkedIn:** [Mian M Jahanzaib](https://linkedin.com/in/mian-m-jahanzaib)
* Feel free to clone, modify, and use this template for your own full-stack portfolio!
