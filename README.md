# API REST SOLID

This project is a API REST developed using TypeScript, and Node.js, focusing on clean architecture and efficient API design that demonstrates the application of the Single Responsibility, Liskov Substitution, and Dependency Inversion principles from SOLID.

##### About SOLID Principles Implemented

- **Single Responsibility Principle (SRP):** Each module or class in the application has a single responsibility and operates independently, enhancing modularity and making the codebase more understandable and easier to debug.

- **Liskov Substitution Principle (LSP):** We have ensured that our subclasses can serve as replacements for their respective parent classes without disrupting the application's integrity. This design promotes interchangeability and flexibility in using our components.

- **Dependency Inversion Principle (DIP):** High-level modules in this application do not depend on low-level modules. Instead, both levels depend on abstractions. This principle reduces the coupling between components, allowing for more straightforward updates and scalability.

## Learning Credits

This project was developed based on the video "[Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44](https://www.youtube.com/watch?v=vAV4Vy4jfkc&ab_channel=Rocketseat)" by Rocketseat, available on Youtube. The insights and techniques demonstrated in this video were instrumental in shaping the development and design of this REST API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. Node.js installed on your system
2. You will need a [Mailtrap](https://mailtrap.io/) account to handle email testing (sign up here if you don't have an account). This step is crucial to acquire the necessary credentials.

## Getting Started

To start using this project, follow these steps:

1. Clone the repository to your local machine.

2. Install the necessary dependencies by running ```npm install```.

3. Run ```npm start``` inside the project’s root directory to launch the application.

4. Open your preferred tool to test API requests (e.g., Postman).

5. Set up a POST request to `http://localhost:3333/users` endpoint.

6. In the request body, add a JSON object with the following structure:

```
    {
        "name": "Test",
        "email": "test@mail.com",
        "password": "123456"
    }
```

5. Send the request and wait for the response status. The API should respond with a success status code or error messages in JSON format.

6. Open MailTrap, go to your project, and check your inboxes to view the confirmation email that has been sent.