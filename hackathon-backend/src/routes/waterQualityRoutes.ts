import express from "express";
import {
  getAllWaterQuality,
  addWaterQuality,
} from "../controllers/waterQualityController";

const qualityRouter = express.Router();

qualityRouter.get("/getAllWaterQuality", getAllWaterQuality);
qualityRouter.post("/addWaterQuality", addWaterQuality);
// Define other routes (GET by ID, PUT, DELETE)

export default qualityRouter;
