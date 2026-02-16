app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully!");
});
