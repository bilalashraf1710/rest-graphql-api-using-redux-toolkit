# React Redux Toolkit Query App with MSW Mocks

This is a React app that demonstrates the usage of React, Redux Toolkit, and Redux Toolkit Query with MSW (Mock Service Worker) for mocking API requests.

## Features

- Fetches data using Redux Toolkit Query with React Redux Toolkit integration.
- Utilizes MSW to mock API requests during development.
- Demonstrates the usage of GraphQL API and REST API endpoints.
- Implements CRUD operations for posts using both GraphQL and REST APIs.

## Installation

1. Clone the repository:

git clone <repository_url>

2. Install dependencies:

cd <project_directory>
npm install

## Usage

1. Start the development server:

npm start
The app will be accessible at http://localhost:3000.

2. Mocking API Requests:

During development, the app uses MSW to mock API requests. The mocks are defined in the mocks directory. You can modify the mock handlers in the mocks/handlers.js file to simulate different scenarios and responses.

3. GraphQL API:

The app fetches data from a GraphQL API using Redux Toolkit Query. The GraphQL API endpoint is configured in the slices/gqlApi.ts file.

4. REST API:

The app also fetches data from a REST API using Redux Toolkit Query. The REST API endpoint is configured in the slices/restApi.ts file.

5. CRUD Operations:

The app demonstrates CRUD (Create, Read, Update, Delete) operations for posts using both the GraphQL and REST APIs. The GqlPosts component handles operations with the GraphQL API, while the RestPosts component handles operations with the REST API.

6. State Management:

Redux Toolkit is used for state management in the app. The Redux store is configured in the store.ts file.

# Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

# License

This project is licensed under the MIT License.

# Acknowledgements

React
Redux Toolkit
MSW (Mock Service Worker)
