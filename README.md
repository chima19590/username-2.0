# User Profile App

A simple React application that displays a user profile and allows users to input their name to see a personalized welcome message.

## Features

- Displays a user profile card with example user information (name, avatar, email, and location).
- Includes a form that allows users to input their name and see a dynamic welcome message.
- Demonstrates basic form handling and React `useState` for managing state.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **CSS:** Basic styling for the app.
- **React Hooks (`useState`):** To manage user input and welcome message state.

## Installation Instructions

To get started with this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/user-profile-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd user-profile-app
    ```

3. **Install dependencies:**

    Ensure you have `Node.js` and `npm` installed. If not, download and install them from [here](https://nodejs.org/).

    Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

4. **Run the app:**

    After installing the dependencies, start the development server:

    ```bash
    npm start
    ```

    This will launch the app in your browser at `http://localhost:3000`.

## App Structure

### 1. **`App.js`**

- This is the main component that:
  - Renders the user profile card (`UserCard`).
  - Manages state for the user input and the welcome message using React hooks (`useState`).
  - Contains the form for the user to input their name and submit it.

### 2. **`UserCard.js`**

- A functional component that:
  - Displays the user's profile data (name, avatar, email, and location) passed as props from the parent component (`App.js`).
  - Uses basic HTML and CSS to render the user profile.

### 3. **`App.css`**

- Basic CSS styling for the layout and the form.
- You can customize the styles as needed for a more polished user interface.

## How It Works

1. **User Profile:**
   - The app displays a predefined user profile, which includes the user's name, avatar, email, and location. This data is passed to the `UserCard` component.
   
2. **Form Interaction:**
   - A form is presented to the user where they can input their name. When they click "Submit", the `handleSubmit` function is triggered, updating the state with a personalized welcome message (`Welcome, [user's name]!`).

3. **Welcome Message:**
   - After the form submission, the app will display a greeting like: `Welcome, [name]!`.

## Example

### Initial view:
- The page will display the default user profile (John Doe) with an avatar, email, and location.

### After form submission:
- When a user enters their name (e.g., "Alice") and clicks submit, the page will show:  
  `Welcome, Alice!`

## Future Improvements

- Add more complex user profile functionality, such as allowing users to edit their profile.
- Introduce authentication for users to save their profile across sessions.
- Improve the user interface with animations or more advanced CSS.

