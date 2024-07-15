# F1 GOAT - Vite/React Project

Welcome to the F1 GOAT project! This is a front-end application built using Vite and React, hosted on Netlify. The project allows visitors to vote for who they think is the best and worst F1 driver of all time.

## Live Demo

Check out the live demo of the project: [F1 GOAT](https://f1-goat.com)

## Features

- **Vote for F1 Drivers**: Visitors can vote for who they believe is the best (GOAT) and worst (TOAD) F1 driver of all time.
- **Driver List**: The list of drivers is probably 60% complete, but it includes pretty much all of the big names in F1 history.
- **Firebase Database**: The project uses a Firebase Realtime Database to track user votes.

## Tech Stack

- **Vite**: A fast and optimized build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: Used for authentication and real-time database.
- **Netlify**: Hosting service for the live demo of the project.

## Directory Structure

The repository is organized into the following directories:

- **f1-goat**: This is the current version of the project built using Vite and React.
- **goat**: This is an earlier version of the project, written in PHP Laravel using Blade for the frontend.
- **python**: This directory contains scripts for building bar-chart races that feature on the website.

## About the Project

This project was initially conceived as a data analytics project to show stats on F1 drivers, constructors, and engine manufacturers. However, it evolved into a front-end project focused on engaging visitors with a voting system for F1 drivers.

### Next Steps

The next phase of this project will involve integrating an API that scrapes F1 news from around the web. This will provide visitors with the latest news and updates in the world of Formula 1.

## Build In Public

This is a Build In Public project. You can follow the progress and contribute to its development on [GitHub](https://github.com/rnddave/f1-goat).

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/rnddave/f1-goat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd f1-goat/f1-goat
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with your Firebase configuration:

   ```plaintext
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_ANALYTICS=your_firebase_analytics
   VITE_FIREBASE_DATABASE_URL=your_firebase_database_url
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` or possibly `http://localhost:5173` to see the project in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out via [GitHub Issues](https://github.com/rnddave/f1-goat/issues).

