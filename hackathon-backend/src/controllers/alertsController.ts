import { Request, Response } from "express";
import { db } from "../firebaseConfig";

export const getAllAlerts = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("alerts").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch alerts" });
  }
};

export const getAlertById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const doc = await db.collection("alerts").doc(id).get();
    if (!doc.exists) res.status(404).json({ error: "Alert not found" });
    res.status(200).json({ id: doc.id, ...doc.data() });
    return;
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch alert by ID" });
  }
};

export const addAlert = async (req: Request, res: Response) => {
  try {
    const newAlert = req.body;
    const docRef = await db.collection("alerts").add(newAlert);
    res.status(201).json({ message: "Alert added", id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: "Failed to add alert" });
  }
};

export const deleteAlert = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.collection("alerts").doc(id).delete();
    res.status(200).json({ message: "Alert deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete alert" });
  }
};
