import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/notes", // Replace with your backend's base URL
});

export const getNotes = () => api.get("/");
export const getNote = (id) => api.get(`/${id}`);
export const createNote = (data) => api.post("/", data);
export const editNote = (id, data) => api.put(`/${id}`, data);
export const deleteNote = (id) => api.delete(`/${id}`);
