import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotes } from "../api/notes";
import "./HomePage.css";

function HomePage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
      .then((response) => setNotes(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home page Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
