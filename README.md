# Travel Places

## Project Overview
Travel Places is a full-stack web application that allows users to explore and share their favorite travel destinations. This project is built using the MERN stack (MongoDB, Express, React, and Node.js) and includes features such as user authentication, CRUD operations for places, and an interactive map.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pritamstudent/Travel_Places.git
   cd Travel_Places
   ```

2. **Install dependencies**

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following content:
   ```plaintext
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**

   Start the backend server:
   ```bash
   cd backend
   npm start
   ```

   Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage
- Navigate to `http://localhost:3000` in your web browser to access the application.
- Sign up for an account or log in if you already have one.
- Explore travel destinations shared by other users or add your own favorite places.
- View the details of each place, including an interactive map.

## Features
- **User Authentication**: Secure sign-up and login using JWT.
- **CRUD Operations**: Create, read, update, and delete travel places.
- **Interactive Map**: View locations on an interactive map using the Mapbox API.  (not working yet)
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies
- **Frontend**: React, Redux, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT
- **Map Integration**: Mapbox API (not working yet)
- **Styling**: CSS, Material-UI

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

 

---

Thank you for checking out Travel Places! If you have any questions or suggestions, feel free to open an issue or contact me. Happy traveling!
