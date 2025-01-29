// Import the necessary library → require axios
// Set up and name the async function
// Set up try/catch: Make the API request using axios and error handling
// Add consol.logs to test and see data from api and error handling
// Call the function with the name()
// Test by running node and name of file in terminal: node script_name.js


const axios = require("axios");

const usersApi = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/2"); // users api.
    console.log("Api response", response.data);
  } catch (error) {
    console.log("Error fetching response data", error.message);
  }
};
usersApi();
