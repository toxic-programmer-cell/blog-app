import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "../server/configs/db.js";
import adminRouter from "./routes/adminRoutes.js";

connectDB();

const app = express();

await connectDB();

//Midelware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
