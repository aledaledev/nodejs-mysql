import { pool } from "../db.js";

//con manejo de errores para evitar la caida del servidor
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "something is wrong" });
  }
};

export const getEmployee = async (req, res) => {
    const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id=?", [id]);
    rows.length
      ? res.json(rows[0])
      : res.status(404).json({ message: "employee not found" });
  } catch (error) {
    return res.status(500).json({ message: "something is wrong" });
  }
};

export const postEmployee = async (req, res) => {
    const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?,?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: "something is wrong" });
  }
};

/*export const putEmployee = (req, res) => {
  res.send("updating employee");
};*/

export const putEmployee = async (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id=?",
      [name, salary, id]
    );
    if (!result[0].affectedRows) return res.status(404).json({ message: "insuficent data" });
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "something is wrong" });
  }
};

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM employee WHERE id=?", [id]);
    result[0].affectedRows
      ? res.sendStatus(204)
      : res.json({ message: "employee not found" });
  } catch (error) {
    return res.status(500).json({ message: "something is wrong" });
  }
};
