import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getNote, editNote } from "../api/notes";
import "./EditPage.css";
function EditPage() {
  const [note, setNote] = useState({ title: "", contents: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getNote(id)
      .then((response) => setNote(response.data))
      .catch((error) => console.error(error));
  }, [id]);
  // Handle changes to input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    editNote(id, note)
      .then(() => {
        console.log("Note updated successfully!");
        navigate("/notes");
      })
      .catch((error) => {
        console.error("Error updating note:", error);
      });
  };
  return (
    <div>
      <h1>Edit page</h1>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contents:</label>
          <input
            type="text"
            name="contents"
            value={note.contents}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <Link to={`/notes/${id}`}>Cancel</Link>{" "}
      {/* Link to go back to the note view page */}
    </div>
  );
}
export default EditPage;
