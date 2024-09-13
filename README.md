# Full-Stack Movie Review Application

## Overview

This is a Full-Stack Movie Review Application built using React for the frontend and Spring Boot for the backend. It allows users to browse movies, view trailers, and submit reviews.

## Features

- **Movie Listings:** View a list of movies with details such as title, poster, and backdrop.
- **Movie Trailers:** Watch trailers for each movie.
- **Review Submission:** Submit reviews for movies and view existing reviews.
- **Responsive Design:** The application is designed to be responsive and works well on various devices.

## Technologies Used

### Frontend
- **React:** For building the user interface.
- **React Router:** For routing and navigation.
- **Material-UI:** For UI components and styling.
- **Axios:** For making HTTP requests.
- **Bootstrap:** For additional styling and responsive design.

### Backend
- **Spring Boot:** For building the RESTful API.
- **MongoDB:** For storing movie and review data.

## Setup and Installation

### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Ensure you have MongoDB installed and running.

3. Build and run the Spring Boot application:

    ```bash
    ./mvnw spring-boot:run
    ```

## API Endpoints

- **GET /api/v1/movies:** Retrieve a list of movies.
- **GET /api/v1/movies/{id}:** Retrieve details of a specific movie.
- **POST /api/v1/reviews:** Submit a new review.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [AnirudhN1](mailto:your-email@example.com).

