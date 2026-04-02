router.get("/books/search", async (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({ error: "Title query is required" });
    }

    const books = await readfile();

    const results = books.filter(b =>
        b.title.toLowerCase().includes(title.toLowerCase())
    );

    res.json(results);
});
