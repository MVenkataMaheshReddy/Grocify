# 🛒 Grocify - A Full-Stack App

A modern, full-stack e-commerce application for groceries. This project features a **Spring Boot** backend, a **React** frontend, and a **MySQL** database with real-world product data and high-quality imagery.

---

## 🚀 Features
- **Real-time Product Filtering:** Search by name or filter by categories (Fruits, Vegetables, Dairy).
- **Quick Buy Tool:** Add multiple items to the cart simultaneously using the "Lightning Quick" list.
- **Persistent Data:** All product information, prices (in ₹), and image URLs are stored in MySQL.
- **Responsive UI:** Clean, Amazon-style interface built with React and Lucide-icons.
- **Professional Imagery:** Photorealistic product images sourced from Unsplash/Pexels.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Functional Components & Hooks)

### Backend
- **Java 25**
- **Spring Boot 3**
- **Spring Data JPA** (Hibernate)

### Database
- **MySQL 8.x**


## ⚙️ Setup & Installation

### 1. Database Configuration
1. Open **MySQL Workbench**.
2. Create a new schema: `CREATE DATABASE grocery_db;`.
3. Import the provided SQL script: 
   - Go to `Server` -> `Data Import`.
   - Select `Import from Self-Contained File`.
   - Choose `db_backup.sql` from the project root.

### 2. Backend Setup (Spring Boot)
1. Navigate to the `backend` folder.
2. Open `src/main/resources/application.properties`.
3. Update your MySQL credentials:
   ```properties
   spring.datasource.username=your_username
   spring.datasource.password=your_password
