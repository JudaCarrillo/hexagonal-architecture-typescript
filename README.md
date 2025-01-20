# Hexagonal Architecture with TypeScript

This repository demonstrates and explains the concepts of Hexagonal Architecture.

## Main Services:

- **Dashboard API**
- **Repository (DB)**
- **Control Plane**

### Service Interaction

The interaction between services begins with a login request. This triggers a primary action that interacts with the **Control Plane** and **DB** services through adapters.

### Key Points

- Ports define and limit the scope of actions.
- For the port "authenticating," an adapter "authenticator" is required. This might involve creating proxies.

### Design Patterns

- **[Proxy Design Pattern](https://refactoring.guru/design-patterns/proxy):** A structural pattern that provides a surrogate or placeholder to control access to an object.
- **[Adapter Design Pattern](https://refactoring.guru/design-patterns/adapter):** A structural pattern that bridges the gap between two incompatible interfaces, enabling them to work together seamlessly.

### Additional Information

- **Security Tokens:**  
  JSON Web Tokens (JWT) are used for generating **security** tokens. These facilitate communication between services (hexagons).

- **Tools and **Frameworks**:**  
  The repository implements **tRPC** for communication and documentation via the tRPC panel.

### Running the Project Locally with tRPC

To run the project locally with tRPC, follow these steps:

#### Setup Instructions

1. **Clone the Repository**  
   If you haven't already, clone the repository to your local machine:

   ```bash
   git clone https://github.com/JudaCarrillo/hexagonal-architecture-typescript
   cd hexagonal-architecture-typescript
   ```

2. **Install Dependencies**  
   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the Server**  
   To start the server locally, run:

   ```bash
   cd src/dashboard-api
   ```

   ```bash
   npm run dev
   ```

   The server will be running at `http://localhost:3000`.

4. **Access the tRPC Panel**  
   Once the server is running, you can access the tRPC panel by visiting:

   ```bash
   http://localhost:3000/panel
   ```

   This will open a visual interface to interact with your tRPC API.
