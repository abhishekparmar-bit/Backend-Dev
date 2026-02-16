let posts = [
  { id: 1, title: "First Post", content: "Hello World" }
];

app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("post", { post });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  const { title, content } = req.body;
  posts.push({
    id: posts.length + 1,
    title,
    content
  });
  res.redirect("/posts");
});
