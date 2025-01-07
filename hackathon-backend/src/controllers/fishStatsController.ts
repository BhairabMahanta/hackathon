// fishStatsController.ts
import { Request, Response } from "express";
import { db } from "../firebaseConfig";

export const getAllFishStats = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("fishStats").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fish statistics" });
  }
};

export const getFishStatById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const doc = await db.collection("fishStats").doc(id).get();
    if (!doc.exists) res.status(404).json({ error: "Data not found" });
    res.status(200).json({ id: doc.id, ...doc.data() });
    return;
  } catch (error: any) {
    console.error(500, error.message);
    res.status(500).json({ error: "Failed to fetch data by ID" });
  }
};

export const addFishStat = async (req: Request, res: Response) => {
  try {
    const newStat = req.body;
    const docRef = await db.collection("fishStats").add(newStat);
    res.status(201).json({ message: "Data added", id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: "Failed to add data" });
  }
};

export const updateFishStat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await db.collection("fishStats").doc(id).update(updatedData);
    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update data" });
  }
};

export const deleteFishStat = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.collection("fishStats").doc(id).delete();
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete data" });
  }
};
