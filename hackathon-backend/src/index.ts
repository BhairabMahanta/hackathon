import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./firebaseConfig";
import fishStatsRouter from "./routes/fishStatsRoutes";
import qualityRouter from "./routes/waterQualityRoutes";
import alertsRouter from "./routes/alertsRoutes";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// cors
app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());
app.use(express.json());
app.use(express.json()); // Middleware for parsing JSON
app.use("/api/v1", fishStatsRouter, qualityRouter, alertsRouter);
// Root Route
app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running with TypeScript!");
});

// Example API: Fetch Water Quality Data
app.get("/water-quality", async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("waterQuality").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching water quality data.");
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
