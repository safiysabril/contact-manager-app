const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/dbConnection");
const contactRoutes = require("./routes/contactRoutes")
const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorHandler")

connectDB();
const app = express();

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
