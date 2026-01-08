WordWonder – Spell It Out
Project Overview
WordWonder (Spell It Out) is a web-based word spelling game developed using Node.js, Express.js, EJS, and PostgreSQL. The application generates random words for users and keeps track of their spelling attempts and scores. It provides a simple and interactive way to practice spelling while demonstrating backend development concepts such as database connectivity, REST APIs, and server-side rendering.

Objectives

The main objectives of this project are:
-To build a dynamic web application using Node.js and Express.js
To implement server-side rendering using EJS templates
To integrate a PostgreSQL database for storing user attempts and scores
To handle database connectivity and runtime errors gracefully
To follow secure and industry-standard backend development practices

Features

Random word generation for gameplay
Tracking of wrong attempts for each user
Score calculation for correct answers
PostgreSQL database integration
Secure database queries using parameterized statements
Graceful handling of database connection failures
Simple and user-friendly interface

Technology Stack

Backend: Node.js, Express.js
Frontend: EJS, HTML, CSS, JavaScript
Database: PostgreSQL (Cloud-hosted on Render)
Other Tools & Libraries: body-parser, pg

Project Structure

The project is organized as follows:
server.js – Main server file containing routes and logic
database.js – Database configuration and connection logic
views – EJS templates for rendering UI
public – Static assets such as CSS and JavaScript files
package.json – Project metadata and dependencies
package-lock.json – Dependency lock file

Installation and Setup
Prerequisites

Before running the project, ensure that the following are installed:

Node.js version 18 (LTS)
npm (Node Package Manager)
An active internet connection (for cloud database access)

Steps to Run the Project

Download or clone the project repository from GitHub.
Navigate to the project directory that contains the package.json file.
Install all required dependencies using npm.
Start the server using the appropriate command.
Open a web browser and navigate to the local server URL to access the application.
The application runs locally on port 5400.
Database Configuration

The project uses a PostgreSQL database hosted on Render. SSL configuration is enabled to ensure secure communication between the application and the database server. Proper error handling has been implemented so that database connection issues do not crash the server.

Security and Best Practices
Parameterized SQL queries are used to prevent SQL injection attacks
Async/await is used for safe and readable asynchronous code
Database connection errors are handled gracefully
Clean and modular code structure is maintained

API Endpoints

GET / – Loads the home page
GET /getword – Returns a random word for the game
POST /wrongAns – Updates the number of wrong attempts
POST /rightAns – Updates user score and attempts

Learning Outcomes

Through this project, the following skills were developed:
Building backend applications using Express.js
Integrating PostgreSQL with Node.js
Handling real-world runtime and database errors
Writing secure and production-ready backend code
Debugging Node.js version and environment issues

Future Enhancements

User authentication and login system
Leaderboard to display top scores
Improved UI and user experience
Use of environment variables for configuration
Full cloud deployment

Author

Anita
Aspiring Software Engineer with interest in Backend Development and Web Technologies.
