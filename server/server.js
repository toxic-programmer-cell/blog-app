import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "../server/configs/db.js";

connectDB();

const app = express();

await connectDB();

//Midelware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is working"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
