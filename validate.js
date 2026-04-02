const validateYear = (req, res, next) => {
    const { year } = req.body;

    if (year !== undefined) {
        if (isNaN(year)) {
            return res.status(400).json({ error: "Year must be a number" });
        }

        if (year < 1000 || year > new Date().getFullYear()) {
            return res.status(400).json({ error: "Year out of valid range" });
        }
    }

    next();
};
