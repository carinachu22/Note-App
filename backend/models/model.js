import db from "../database.js";

// Asynchronous functions for interacting with the database
export async function getNotes() {
  const [rows] = await db.promise().query("SELECT * FROM notes"); // Use `db.promise()` for async queries
  return rows;
}

export async function getNote(id) {
  const [rows] = await db.promise().query(
    `
    SELECT * 
    FROM NOTES
    WHERE id = ? 
    `,
    [id]
  );
  return rows[0]; //always return a single object of the array
}

export async function createNote(title, content) {
  const [result] = await db.promise().query(
    `
    INSERT INTO notes (title, contents)
    VALUES (?,?)
    `,
    [title, content]
  );
  const id = result.insertId;
  return getNote(id);
}

export async function deleteNote(id) {
  const [result] = await db.promise().query(
    `DELETE FROM notes 
        WHERE id = ?`,
    [id]
  );
  if (result.affectedRows === 0) {
    throw new Error(`Note with id ${id} not found`);
  }
  return { message: `Note with id ${id} successfully deleted` };
}

export async function editNote(id, title, content) {
  const [result] = await db.promise().query(
    `
      UPDATE notes 
      SET title = ?, contents = ?
      WHERE id = ?

      `,
    [title, content, id]
  );
  if (result.affectedRows === 0) {
    throw new Error(`Note with id ${id} not found or no changes made`);
  }
  return getNote(id);
}
