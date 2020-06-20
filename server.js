const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const routes = require("./router");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("files"));
app.use("/api", routes);

// if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "build")));
app.get(/^\/(?!api).*/, (req, res) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
// }

app.listen(process.env.PORT || 3001, () => {
	console.log("Listening on port 3001");
});
