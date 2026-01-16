#  Pet Shelter Full-Stack Application

A comprehensive full-stack solution for managing pet shelter records. This project features a modular **React** frontend and a professionally structured **Node.js/Express** backend, utilizing a layered architecture and **Swagger (OpenAPI 3.1)** for interactive API documentation.

## Project Architecture

The project is built with a clear separation of concerns to mimic real-world production environments:

* **Frontend (`/client`):** A modern React application that consumes the REST API to provide a seamless user experience for managing pet data.
* **Backend (`/server`):** A robust Node.js API following a 5-layer architecture:
    1.  **Application Layer:** Server initialization and middleware setup (`app.js`).
    2.  **Routes Layer:** HTTP method and endpoint path definitions (`pets.routes.js`).
    3.  **Controllers Layer:** Request validation and orchestration of data flow (`pets.controller.js`).
    4.  **Model Layer:** Core business logic and data manipulation (`pets.models.js`).
    5.  **Persistence Layer:** In-memory data storage (`db.js`).

## Features

-   **Interactive Dashboard:** View, sort, and browse pets currently in the shelter.
-   **Full CRUD Management:** Interface to add new pets, update existing records, and process adoptions (deletions).
-   **Live API Docs:** Explore the API specification and test endpoints directly via the integrated Swagger UI.
-   **Standardized Responses:** Consistent error handling and success status codes.

## Tech Stack

| Frontend | Backend | Documentation |
| :--- | :--- | :--- |
| **React.js** | **Node.js** | **Swagger UI** |
| CSS3 / Flexbox | **Express.js** | **OpenAPI 3.1 (YAML)** |
| Fetch / Axios | **CORS** | **YAMLJS** |

## 🔧 Installation & Setup

### 1. Backend (Server)
Navigate to the server directory and start the API:
```bash
cd server
npm install
npm start

```
### 2. Frontend (Client)
In a new terminal, navigate to the client directory and start the React app:
```bash
cd client
npm install
npm run dev

```
## API Specification
This project utilizes a Spec-First approach. The API is documented in a dedicated swagger.yaml file located in the server root. This ensure the doxumentation is clean, readable, and decoupled frrom the JavaScript logic.