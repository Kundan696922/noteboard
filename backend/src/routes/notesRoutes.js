import express from "express";
import { createNote, updateNote, getAllNotes, getNoteById, deleteNote, pinNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.patch("/:id/pin", pinNote);

export default router;