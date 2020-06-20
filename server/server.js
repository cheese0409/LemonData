const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const routes = require("./router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("files"));
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("../build/"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"));
	});
}

app.listen(process.env.PORT || 3001, () => {
	console.log("Listening on port 3001");
});
