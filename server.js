const compression = require("compression");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8888;

app.use(compression());
app.use(express.static("dist"));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
