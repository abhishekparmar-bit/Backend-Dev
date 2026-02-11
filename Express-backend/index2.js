app.post("/students/register", (req, res) => {
  const { name, branch } = req.body;
  if (!name || !branch)
    return res.status(400).send("Details missing");

  fs.readFile("./students.json", "utf-8", (err, data) => {
    if (err) return res.status(500).send("Could not read file");

    const fileStudents = JSON.parse(data || "[]");

    const newStudent = {
      id:
        fileStudents.length > 0
          ? fileStudents[fileStudents.length - 1].id + 1
          : 1,
      name,
      branch,
    };

    fileStudents.push(newStudent);

    fs.writeFile(
      "./students.json",
      JSON.stringify(fileStudents, null, 2),
      (err) => {
        if (err) return res.status(500).send("Error writing file");

        return res.status(201).json({
          message: "Registered!",
          student: newStudent,
        });
      }
    );
  });
});
