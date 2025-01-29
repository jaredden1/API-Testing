// require axios
// set up and name the async function
// set up try/catch and error handling
// add consol.logs to test and see data from api and error handling
// call the function with the name()
// test by running node and name of file in terminal

const axios = require("axios");

const usersApi = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users/2"); // added dummy users api.
    console.log("Api response", response.data);
  } catch (error) {
    console.log("Error fetching response data", error);
  }
};
usersApi();
