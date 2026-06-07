# rating_application# Project Setup Guide

## Prerequisites

Make sure the following software is installed on your system:

* Node.js (v18 or later)
* MySQL Server
* Git

Verify installation:

```bash
node -v
npm -v
mysql --version
git --version
```

---

## Clone the Repository

```bash
git clone <repository-url>
cd store-rating-platform
```

---

## Database Configuration

1. Open the backend configuration file:

```text
backend/config/database.js
```

2. Update your MySQL credentials:

```javascript
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "your_mysql_password",
  DB: "store_rating_db",
  dialect: "mysql"
};
```

### Change Database Name

If you want to use a different database name:

```javascript
DB: "your_database_name"
```

Create the same database in MySQL:

```sql
CREATE DATABASE your_database_name;
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run the backend server:

```bash
npm run dev
```

Expected output:

```bash
Server running on port 5000
Database connected successfully
```

---

## Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Expected output:

```bash
Local: http://localhost:5173
```

Open the URL in your browser.

---

## Installing Dependencies Manually

### Backend Dependencies

```bash
npm install express mysql2 sequelize bcryptjs jsonwebtoken cors dotenv express-validator
```

Development dependency:

```bash
npm install --save-dev nodemon
```

### Frontend Dependencies

```bash
npm install react-router-dom axios bootstrap
```

or

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

## Import Database Schema

Login to MySQL:

```bash
mysql -u root -p
```

Create database:

```sql
CREATE DATABASE store_rating_db;
USE store_rating_db;
```

Import schema:

```sql
SOURCE schema.sql;
```

---

## Running the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

### Access Application

```text
Frontend: http://localhost:5173
Backend: http://localhost:5000
```

---

## Troubleshooting

### Database Connection Error

Check:

* MySQL service is running
* Database name is correct
* Username and password are correct
* MySQL port is accessible

### npm command not recognized

Reinstall Node.js and restart the terminal.

### Port Already in Use

Change the port in:

```env
backend/.env
```

Example:

```env
PORT=5001
```
