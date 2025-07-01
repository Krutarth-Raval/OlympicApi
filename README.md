# 🚀 Host API Live

A **Node.js** based REST API to host and manage your Men's Ranking project data. Deployed using **Railway** with a live MongoDB Atlas connection.

---

## 🌐 Live API

**Base URL:**  
[https://olympic.up.railway.app](https://olympic.up.railway.app)  

**Example Endpoint:**  
[https://olympic.up.railway.app/mens](https://olympic.up.railway.app/mens)  

---

## 📦 Tech Stack

- ⚡ **Node.js**
- 🗄️ **Express.js**
- 🍃 **MongoDB Atlas**
- ☁️ **Railway Hosting**
- 🔐 **dotenv** for environment management

---

## 🛠️ Features

- Full **CRUD** API for Men's Ranking
- Hosted on **Railway**
- Connected to **MongoDB Atlas**
- RESTful API structure
- Ready for frontend integration

---

## 📂 Project Structure

├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── src
│ ├── db # Database connection
│ ├── models # Mongoose Schema
│ ├── routes # API Routes
│ ├── app.js # Main App File


---

## 🚀 Getting Started

```bash
git clone <your-repo-link>
cd <project-folder>
npm install
npm start
```
---

## Environment Variables (.env file)

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
 
## 📡 API Endpoints

| Method | Route       | Description         |
| ------ | ----------- | ------------------- |
| GET    | `/mens`     | Get all records     |
| GET    | `/mens/:id` | Get record by ID    |
| POST   | `/mens`     | Create new record   |
| PATCH  | `/mens/:id` | Update record by ID |
| DELETE | `/mens/:id` | Delete record by ID |

## 📝 Author  

### 👨‍💻 Krutarth Raval  

[🔗 LinkedIn](https://linkedin.com/in/krutarthraval)  
[🐙 GitHub](https://github.com/krutarth-raval)  

---

## 💡 Connect With Me  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/krutarthraval)  
[![GitHub](https://img.shields.io/badge/GitHub-171515?style=for-the-badge&logo=github&logoColor=white)](https://github.com/krutarth-raval)  
