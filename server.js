require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/db");

// 1. Define the port to use Render's dynamic port OR your local port 3000
const PORT = process.env.PORT || 3000;

connectToDB();

// 2. Use the PORT variable here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});