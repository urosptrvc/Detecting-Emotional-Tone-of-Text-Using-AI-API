# Emotional AI Tone Detector

This is a simple React-based web application that detects the emotional tone of a given text. The app integrates with an AI API (such as Sapling.ai) to analyze the text and provide an emotion reading (e.g., Positive, Neutral, Negative) along with a confidence percentage.

## Features
- **User-friendly Interface**: The app offers a clean and intuitive interface where users can input text, check for emotional tone, and receive results in a visually engaging format.
- **Emotion Detection**: Integrates with an AI API to determine the primary emotion in the text (Positive, Negative, Neutral, etc.).
- **Dynamic Result Display**: The detected emotion is shown with a fade-in effect and is color-coded for clarity.
- **Error Handling**: Displays relevant messages if there’s an issue with the API.

## Tech Stack
- **React**: For building the user interface.
- **Axios**: For handling HTTP requests to the API.
- **CSS**: Custom styling for a polished look and smooth transitions.

## Prerequisites
- **Node.js** and **npm** installed on your machine.
- **API Key**: You’ll need an API key from Sapling.ai or another sentiment analysis provider to access the emotion detection endpoint.

## Getting Started

### 1. Clone the Repository
    git clone <https://github.com/urosptrvc/Aqua-Web-Inspector>
    cd emotional-ai-detector

### 2. Install Dependencies
Install the required dependencies using npm:
    npm install

### 3. Set Up Environment Variables
Create a .env file in the root directory of your project to store the API key:
    REACT_APP_API_KEY=your_sapling_api
Note: Replace "your_sapling_api" with the actual API key obtained from Sapling.ai or the API provider of your choice.

### 4. Run the Application
To start the development server:
    npm start

### Code Overview

# App.js
The main component of the app where all functionality resides:

State Management: Manages user input, detected emotion, and display states.
handleCheckEmotion: The primary function for making the API call and updating the emotion state based on the response.
CSS Classes: Dynamic color classes are applied to detected emotions for a visually appealing result.

# App.css
Contains custom styling for a polished look:

Gradient Background: A smooth gradient background for the entire app.
Card Layout: The main app container is styled as a card with rounded corners and shadow effects.
Transitions: Smooth transition effects for showing/hiding results and interactive button effects.

## API Integration
The app uses Axios to make a POST request to the Sapling.ai API (or other emotion detection API). The API key is included in the request header using the environment variable set in .env. The response is expected to contain emotion data, which is then displayed in the UI.

