
![image](https://github.com/pushkar-2804/Kanban-Task-Management/assets/104600849/43a039b4-7429-41a1-ac9a-1aee504a1d51)
![image](https://github.com/pushkar-2804/Kanban-Task-Management/assets/104600849/91acf961-3126-4998-aac5-53ad0fe32040)
![image](https://github.com/pushkar-2804/Kanban-Task-Management/assets/104600849/81225695-89c7-4697-af2f-b77c328f0225)




```markdown
# Kanban Task Management

Kanban Task Management is a web-based task management application that allows you to organize and track your tasks using a Kanban board. This README provides instructions for setting up and running the project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up](#setting-up)
- [Server Configuration](#server-configuration)
- [Client Configuration](#client-configuration)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can run the application, make sure you have the following prerequisites installed:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB: Ensure you have a MongoDB instance running and note down the connection URI.

### Setting Up

1. Clone the repository:

   ```bash
   git clone https://github.com/pushkar-2804/Kanban-Task-Management.git
   cd Kanban-Task-Management
   ```

2. Create environment variables for the server by creating a `.env` file in the `server` directory with the following content:

   ```
   MONGO_URI=<your-mongodb-url>
   JWT_SECRET=<your-jwt-secret-key>
   ```

   Replace `<your-mongodb-url>` and `<your-jwt-secret-key>` with your actual MongoDB connection URI and a secure JWT secret key.

## Server Configuration

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install server dependencies:

   ```bash
   npm install
   ```

## Client Configuration

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install client dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the server:

   ```bash
   cd server
   npm start
   ```

   The server should now be running on port 3000 by default.

2. Start the client:

   ```bash
   cd client
   npm run dev
   ```

   The client application should open in your default web browser.

## Contributing

If you'd like to contribute to this project, please read the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

