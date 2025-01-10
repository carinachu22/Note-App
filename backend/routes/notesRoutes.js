import express from "express";
import {
  controllerGetNotes,
  controllerGetNote,
  controllerCreateNote,
  controllerDeleteNote,
  controllerEditNote,
} from "../controllers/notesController.js";

const router = express.Router();

// Routes for notes
router.get("/", controllerGetNotes); // GET /notes
router.get("/:id", controllerGetNote); // GET /notes/:id
router.post("/", controllerCreateNote); // POST /notes
router.delete("/:id", controllerDeleteNote);
router.put("/:id", controllerEditNote);

export default router;
