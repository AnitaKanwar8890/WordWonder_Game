# WordWonder – Spell It Out

## Project Overview

WordWonder (Spell It Out) is a web-based word spelling game developed using **Node.js, Express.js, EJS, and PostgreSQL**. The application generates random words for users and keeps track of their spelling attempts and scores. It provides a simple and interactive way to practice spelling while demonstrating backend development concepts such as database connectivity, REST APIs, and server-side rendering.

---

## Objectives

The main objectives of this project are:

- To build a dynamic web application using Node.js and Express.js
- To implement server-side rendering using EJS templates
- To integrate a PostgreSQL database for storing user attempts and scores
- To handle database connectivity and runtime errors gracefully
- To follow secure and industry-standard backend development practices

---

## Features

- Random word generation for gameplay
- Tracking of wrong attempts for each user
- Score calculation for correct answers
- PostgreSQL database integration
- Secure database queries using parameterized statements
- Graceful handling of database connection failures
- Simple and user-friendly interface

---

## Technology Stack

**Backend**
- Node.js
- Express.js

**Frontend**
- EJS
- HTML
- CSS
- JavaScript

**Database**
- PostgreSQL (Cloud-hosted on Render)

**Other Tools & Libraries**
- body-parser
- pg

---

## Project Structure

WordWonder-main/
│── server.js
│── database.js
│── package.json
│── package-lock.json
│── views/
│── public/
│── .gitignore


---

## Installation and Setup

### Prerequisites

- Node.js version **18 (LTS)**
- npm (Node Package Manager)
- Active internet connection (for cloud database access)

---

### Steps to Run the Project

1. Clone the repository from GitHub.
2. Navigate to the project directory containing `package.json`.
3. Install all required dependencies:


---

## Database Configuration

The project uses a **PostgreSQL** database hosted on **Render**. SSL configuration is enabled to ensure secure communication between the application and the database server. Proper error handling ensures that database connection issues do not crash the server.

---

## Security and Best Practices

- Parameterized SQL queries to prevent SQL injection
- Async/await for safe and readable asynchronous code
- Graceful handling of database connection failures
- Clean and modular code structure

---

## API Endpoints

| Method | Endpoint     | Description |
|------|-------------|-------------|
| GET  | `/`         | Loads the home page |
| GET  | `/getword`  | Returns a random word |
| POST | `/wrongAns` | Updates wrong attempts |
| POST | `/rightAns` | Updates user score and attempts |

---

## Learning Outcomes

- Building backend applications using Express.js
- Integrating PostgreSQL with Node.js
- Handling real-world runtime and database errors
- Writing secure and production-ready backend code
- Debugging Node.js environment and version issues

---

## Future Enhancements

- User authentication and login system
- Leaderboard functionality
- Improved UI and user experience
- Environment variable support using `.env`
- Full cloud deployment

---

## Author

**Anita**  
Aspiring Software Engineer | Backend Development Enthusiast
