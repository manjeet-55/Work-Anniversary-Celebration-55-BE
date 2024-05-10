const express = require("express");
const userRoutes = require("./routes/userRoutes");
const { sendBirthdayEmails } = require("./services/EmailService");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Uncomment the line below to manually send birthday emails
sendBirthdayEmails();
