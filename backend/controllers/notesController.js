import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  editNote,
} from "../models/model.js";

export async function controllerGetNotes(req, res) {
  try {
    const notes = await getNotes();
    res.send(notes);
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).send("Failed to get notes");
  }
}
export async function controllerGetNote(req, res) {
  console.log("req.params in getSingleNote:", req.params); // Debugging log
  const { id } = req.params;
  try {
    const note = await getNote(id);
    if (!note) {
      return res.status(404).send("Note not found");
    }
    res.send(note);
  } catch (err) {
    console.error("Error fetching note:", err);
    res.status(500).send("Failed to fetch note");
  }
}

export async function controllerCreateNote(req, res) {
  const { title, contents } = req.body;
  try {
    const note = await createNote(title, contents);
    res.status(201).send(note);
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).send("Failed to create note");
  }
}

export async function controllerDeleteNote(req, res) {
  console.log("req.params:", req.params);
  const { id } = req.params;
  try {
    const result = await deleteNote(id);
    if (!result) {
      return res.status(404).send("Note not found");
    }
    res.send(result);
  } catch (err) {
    console.error("Error fetching note:", err);
    res.status(500).send("Failed to fetch note");
  }
}

export async function controllerEditNote(req, res) {
  const { id } = req.params;
  const { title, contents } = req.body;
  try {
    const note = await editNote(id, title, contents);
    res.status(201).send(note);
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).send("Failed to create note");
  }
}
