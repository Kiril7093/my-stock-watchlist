# Stock Tracking Software

This is a web application built with React for tracking stock prices. Users can create an account, add stocks to their watchlist, and track the changes in their prices. They can also remove stocks from the watchlist and edit them by changing the stock symbol. Additionally, the application utilizes the SoftUni Practice Server for the backend and includes a "Details" functionality to view individual stock details.

## Getting Started

### Prerequisites

- Node.js installed on your machine (v12 or later)

### Installation

1. Clone the repository to your local machine.
2. Open the project directory in the terminal.
3. Run the command `npm install` to install the necessary dependencies.

### Starting the Application

1. In the terminal, navigate to the project directory.
2. Run the command `npm start` to start the development server.
3. Open your web browser and go to `http://localhost:3000` to view the application.


## API Key

To use this application, you will need an API key from Finnhub. Here are the steps to get an API key:

1. Go to the Finnhub website at https://finnhub.io/
2. Click on the "Get Free API Key" button in the top right corner of the page.
3. Sign up for an account by entering your email and creating a password, or log in if you already have an account.
4. Once you are logged in, you will be directed to the dashboard. Click on the "API Keys" tab.
5. Create a new API key by clicking on the "Create New API Key" button.
6. Give your API key a name, select the plan you want to use, and click on the "Create" button.
7. Your API key will be generated and displayed on the screen. Copy it and keep it in a safe place.

### Setting Environment Variables

To set the necessary environment variables for this application, follow these steps:

1. Open the Start menu and search for "Environment Variables".
2. Click on "Edit the system environment variables".
3. Click on the "Environment Variables" button.
4. Under "User variables" or "System variables", click "New" to add a new variable.
5. Enter the name of the variable (e.g. REACT_APP_API_KEY) and its value.
6. Click "OK" to save the variable.

Note that you'll need to set the REACT_APP_API_KEY environment variable with your Finnhub API key in order for the application to work properly.

## Usage

Users can:

- create an account and login to the application.
- search and add stocks to their watchlist.
- view the current and historical prices of their watched stocks.
- view individual stock details.
- remove stocks from their watchlist.
- edit a stock by changing its symbol.

## Server

This application utilizes the SoftUni Practice Server for the backend.

## Disclaimer

This project is for educational and portfolio purposes only. The developer of this project does not offer any financial advice, and this application should not be used for actual stock trading. The developer is not responsible for any losses that may occur from the misuse of this application.

## License

This project is licensed under the MIT License.
