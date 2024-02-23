// Require app
const app = require("./app");

// Set the port to 3000 if process.env.PORT is false 
const port = process.env.PORT || 3000;

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});