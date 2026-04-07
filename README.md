# MVC Refactor - Task API

This project is a Node.js and Express application that demonstrates how to structure a backend API using the MVC (Model-View-Controller) architecture. The application provides CRUD APIs for managing tasks and organizes the code into separate folders for models, controllers, routes, middlewares, and utilities.

## Features

* Task management API
* CRUD operations (Create, Read, Update, Delete)
* MVC architecture structure
* Express routing
* Middleware for logging and error handling
* Custom error handling utility

## Technologies Used

* Node.js
* Express.js
* Postman (for testing APIs)

## Project Structure

Task-MVC-API

│

├── controllers

│   └── taskController.js

│

├── models

│   └── taskModel.js

│

├── routes

│   └── taskRoutes.js

│

├── middlewares

│   ├── errorHandler.js

│   └── logger.js

│

├── utils

│   └── appError.js

│

├── server.js

└── package.json

## Installation

Clone the repository

git clone https://github.com/mushrifa-hussain/Task-MVC-API.git

Navigate into the project folder

cd Task-MVC-API

Install dependencies

npm install

## Running the Server

Start the server using:

node server.js

The server will run on:

http://localhost:3000

## API Endpoints

GET /api/tasks
Returns all tasks.

GET /api/tasks/:id
Returns a specific task by ID.

POST /api/tasks
Creates a new task.

PUT /api/tasks/:id
Updates an existing task.

DELETE /api/tasks/:id
Deletes a task.

## Learning Outcome

This project demonstrates how to refactor an Express API into MVC architecture, improving code organization, maintainability, and scalability.

## Author

Mushrifa Hussain
