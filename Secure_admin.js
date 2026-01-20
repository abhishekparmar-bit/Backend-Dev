const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/admin") {
        const { user, pass } = parsedUrl.query;

        if (user === "admin" && pass === "1234") {
            fs.readFile("admin_dashboard.html", "utf-8", (err, data) => {
                if (err) {
                    console.error("Error reading file:", err);
                    res.writeHead(500, { "Content-Type": "text/html" });
                    return res.end("<h1>Internal Server Error</h1>");
                }

                console.log("File read successfully");
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data); // send HTML file
            });
        } else {
            res.writeHead(401, { "Content-Type": "text/html" });
            res.end("<h1>Invalid Credentials</h1>");
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page Not Found</h1>");
    }
});

server.listen(8003, () => {
    console.log("Server running on port 8003");
});
