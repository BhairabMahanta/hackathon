import express from "express";
import {
  getAllAlerts,
  getAlertById,
  addAlert,
  deleteAlert,
} from "../controllers/alertsController";

const alertsRouter = express.Router();

alertsRouter.get("/getAllAlerts", getAllAlerts);
alertsRouter.get("/getAllAlerts/:id", getAlertById);
alertsRouter.post("/addAlert", addAlert);
alertsRouter.delete("/deleteAlert/:id", deleteAlert);

export default alertsRouter;
