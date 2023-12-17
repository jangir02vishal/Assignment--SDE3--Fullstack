# Password Strength Checker App

https://github.com/jangir02vishal/Assignment-SDE3-Fullstack/assets/136950731/a3ca1ae0-0152-4f64-b1b8-83078ef19ac8

## Overview

This is a React application for a password strength checker. The app is built using Express.js, Node.js, and MongoDB. It allows users to check the strength of passwords, distinguishing between strong and weak passwords.

## Features

- Check the strength of passwords
- Distinguish between strong and weak passwords
- Store password strength data in MongoDB Cloud

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js and npm](https://nodejs.org/)
- [MongoDB Cloud account](https://www.mongodb.com/cloud) (for storing password strength data)

## Installation

1. Clone the repository to your local machine:
   ````bash
   git clone https://github.com/jangir02vishal/Assignment-SDE3-Fullstack.git
   
2. Change into the project directory:
   ````bash
   cd password-strength-checker-react-app
   
3. Install dependencies for both the server and the client:
   ````bash
   npm install

## Configuration
 - Create a MongoDB Cloud account and obtain your connection string.
 - Setup a MongoDB connection in server.js file and add MondoDB URI to connect.

## Running the App

1. Start the server:
   ````bash
   node server.js
   
2. Start the React app:
   ````bash
   npm start
   
3. Open your browser and visit http://localhost:3000 to view the app.

## Usage
 - Enter a password in the input field.
 - Click the "Check" button.
 - View the strength result displayed.
 - It also suggests the number of steps required to make your strong.

## Contributing
Feel free to contribute to the development of this password strength checker app.
