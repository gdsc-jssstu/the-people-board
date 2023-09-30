# 🙋‍♂️ The-People-Board 🙋‍♀️

The People Board is an open-source web development project to challenge the community to create a job/people board where alumni, students, and job seekers of a university can meet and connect.

> - Before Contributing Look Into [CONTRIBUTING GUIDELINES](./CONTRIBUTING.md)
> - Our Code of Conduct: [CODE OF CONDUCT](./CODE_OF_CONDUCT.md)

## Tech Stack Used

The tech stack used here is:

- ReactJS v18.2 + Create React App (Frontend)
- NodeJS v18 + Express v4.18 (Backend API Server)
- PostgreSQL v14 (Database)

You need to have NodeJS, ReactJS, and PostgreSQL installed on your system to run this project.

## Project Structure

The project is a monorepo divided into two parts:

### Backend

- The backend is a NodeJS + Express server that serves the API endpoints for the frontend to consume.
- The backend server runs on port 5000 by default.
- The backend is located in the `backend` folder.
- The backend follows a controller structure, where endpoints are directed to a specific controller, which then handles the request and sends a response.
- You can see a sample controller in the `backend/src/controllers` folder called `test` which includes two example endpoints- `test/get` and `test/post`.
- We expect you to follow this controller structure and create your own controllers for the project. Make sure to group related controllers and endpoints together.
- The backend uses the `cors` library to enable CORS on the server, and the `bcrypt` library if there is any need for password hashing and validation.
- The backend uses the `knex` library along with the `pg` package to connect to the PostgreSQL database.

### Frontend

- The frontend is a ReactJS app created using Create React App.
- The frontend runs on port 3000 by default.
- The frontend is located in the `frontend` folder.
- The frontend uses the `react-router-dom` library for routing.
- The frontend uses fetch calls to make API calls to the backend.

## Project Setup Instructions

1. Clone this repository using `git clone https://github.com/gdsc-jssstu/the-people-board`

### Setting Up and Running the Frontend

To setup and run the frontend, follow these steps:

- Navigate to the `frontend` folder
- Run `npm install` to install all the dependencies
- Run `npm start` to start the frontend server
- The frontend server will start on port 3000 by default

### Setting Up and Running the Backend

To setup and run the backend, follow these steps:

- [Recommended] Open another terminal window.
- Navigate to the `backend` folder
- Run `npm install` to install all the dependencies
- Run `npm start` to start the backend server
- The backend server will start on port 5000 by default

## Final Vision/Guiding Designs of The Project

- These are designs to help visualise and guide the development of the project. The final version of the project may or may not look like this. Creative freedom is encouraged.
- Click [here](https://www.figma.com/) for the UI design and prototype of the project.

## Intended Final Project

 A responsive and aesthetically designed people board that displays cards with people's contact information. The board also has a search feature where users can search for specific individuals on the board. The website also allows users to add/remove themselves into/from the board and update their profiles on the board.

## Maintainers

- [Sayed Afnan Khazi](https://github.com/Sayed-Afnan-Khazi)
