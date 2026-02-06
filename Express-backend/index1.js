const express = require("express");
const app = express();

const port = 8000;

// Middleware to read JSON body
app.use(express.json());

let students = [
  { id: 1, name: "Abhishek", branch: "CSE" },
  { id: 2, name: "Abhi", branch: "ECE" },
  { id: 3, name: "Ansh", branch: "Bio" },
];

// ✅ GET – get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// ✅ GET – get student by id
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// ✅ POST – add a new student
app.post("/students", (req, res) => {
  const { id, name, branch } = req.body;

  if (!id || !name || !branch) {
    return res.status(400).json({ message: "All fields are required" });
  }

  students.push({ id, name, branch });
  res.status(201).json({ message: "Student added", students });
});

// ✅ PUT – update student by id
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, branch } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (branch) student.branch = branch;

  res.json({ message: "Student updated", student });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});