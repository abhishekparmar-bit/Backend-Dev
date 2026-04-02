router.get("/books", async (req, res) => {
    let { author, year } = req.query;

    let books = await readfile();

    if (author) {
        books = books.filter(b => 
            b.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    if (year) {
        books = books.filter(b => b.year == Number(year));
    }

    res.json(books);
});
