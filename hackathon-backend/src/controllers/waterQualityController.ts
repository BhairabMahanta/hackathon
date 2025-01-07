import { Request, Response } from "express";
import { db } from "../firebaseConfig";

// Get all water quality data
export const getAllWaterQuality = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("waterQuality").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("data", data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch water quality data" });
  }
};

// Add new water quality data
export const addWaterQuality = async (req: Request, res: Response) => {
  try {
    const newEntry = req.body;
    const docRef = await db.collection("waterQuality").add(newEntry);
    res.status(201).json({ message: "Data added", id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: "Failed to add data" });
  }
};

// Other CRUD operations go here...
