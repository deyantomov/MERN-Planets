# MERN-Planets


## 1. About the Project
MERN Planets is a full-stack application which uses data from a sample MDB cluster. Built using the MERN stack, it provides information about the planets in the solar system. The application is based on the MVC architecture and uses a lot of additional libraries like Redux for state management, axios for HTTP requests, and React-Three-Fiber and drei for 3D visualization.

## 2. Target Features
- **Smooth experience**: A smooth 3D interface running at 60FPS, and a table view for data visualization.
- **Small dataset**: The only data that is needed is about the 8 planets in the solar system so the data set shouldn't be big.
- **Administrative part**: A way to not only read, but also edit and write data.

## 3. Tech Stack
- **Language**: TypeScript
- **Front-end**: React, Redux Toolkit, Axios, Tailwind CSS, three, React Three Fiber, drei
- **Back-end**: Node.js, Express, Axios
- **Database**: MongoDB
- **ODM**: Mongoose
- **Unit Tests**: Jest

## 4. Installation

### Prerequisites
- Node.js
- npm

### Clone the Repository
```sh
git clone https://github.com/deyantomov/MERN-Planets
cd MERN-Planets
```

### Install the server (from the root of the MERN-Planets folder)
```
cd server
npm i
```

- Add the Atlas URI to an .env file in the root of the server folder - Contact repository owner or contributors to obtain Atlas URI.

### Install the client (from the root of the MERN-Planets folder)
```
cd client
npm i
```

## 5. Run the project

### Start a development server (back-end)
```sh
npm run dev
```

### Start a development server (front-end)
```sh
npm run dev
```

## 6. Test

### Test the project (back-end)

⚠️ IMPORTANT - The server needs to be running. Open a separate tab on your terminal and run ```npm run dev``` in the server folder first.
```sh
npm test | npm run test
```
