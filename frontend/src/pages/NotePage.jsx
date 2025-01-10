import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote } from "../api/notes";

function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id)
      .then((response) => {
        console.log("API Response:", response); // Log the entire response
        setNote(response.data); // Set the note data
      })
      .catch((error) => {
        console.error("Error fetching note:", error);
      });
  }, [id]);
  // Log the updated note when it changes
  useEffect(() => {
    if (note) {
      console.log("Updated note:", note); // Log the note after it has been updated
    }
  }, [note]); // This runs whenever `note` is updated

  const handleDelete = () => {
    deleteNote(id)
      .then(() => {
        navigate("/notes");
      })
      .catch((error) => console.error("Failed to delete note:", error));
  };

  const handleEdit = () => {
    console.log("In handle edit");
    navigate(`/notes/edit/${id}`);
  };

  // Need to display the loading...
  // because it takes some time to load the note
  return (
    <div>
      <h1>{note ? note.title : "Loading..."}</h1>
      <p>{note ? note.contents : "Loading..."}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
export default NotePage;
