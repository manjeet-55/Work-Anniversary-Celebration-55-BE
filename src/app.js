import express from "express";
import userRoutes from "./routes/userRoutes.js";
import sendBirthdayEmails from "./services/EmailService.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Uncomment the line below to manually send birthday emails
sendBirthdayEmails();
