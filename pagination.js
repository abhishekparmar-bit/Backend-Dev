router.get("/books", async (req, res) => {
    let { page = 1, limit = 10 } = req.query;

    page = Number(page);
    limit = Number(limit);

    const books = await readfile();

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedBooks = books.slice(start, end);

    res.json({
        total: books.length,
        page,
        limit,
        data: paginatedBooks
    });
});
