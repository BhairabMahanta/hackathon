import express from "express";
import {
  getAllFishStats,
  getFishStatById,
  addFishStat,
  updateFishStat,
  deleteFishStat,
} from "../controllers/fishStatsController";
const fishStatsRouter = express.Router();

fishStatsRouter.get("/getAllFishStats", getAllFishStats);
fishStatsRouter.get("/getFishStatById/:id", getFishStatById);
fishStatsRouter.post("/add", addFishStat);
fishStatsRouter.put("/update/:id", updateFishStat);
fishStatsRouter.delete("/delete/:id", deleteFishStat);

export default fishStatsRouter;
