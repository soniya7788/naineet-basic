const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Candidate profile URL: /profile.html/zjmm6bb
app.get("/profile.html/:code", (req, res) => {
    console.log("Requested candidate code:", req.params.code);

    res.sendFile(path.join(__dirname, "profile.html"));
});

// Serve JavaScript, images, and other static files
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});