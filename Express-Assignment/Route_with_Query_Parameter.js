app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "raj" },
    { id: 2, name: "ajay" },
    { id: 3, name: "yash" },
  ];

  const { name } = req.query;

  if (name) {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(users);
});
