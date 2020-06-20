const router = require("express").Router();
const { toCSVRow, toJSON } = require("./util");
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var dir = "./.uploads";

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, `${__dirname}/.uploads/`);
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});

var upload = multer({ storage: storage });
var fs = require("fs");

router.get("/file/:content", async (req, res) => {
	var rowData, jsonData;
	if (req.params.content === "covid19") {
		rowData = await toCSVRow("files/covid19.csv");
		jsonData = await toJSON("files/covid19.csv");
		return res.status(200).json({ rowData, jsonData });
	} else if (req.params.content === "marriage") {
		rowData = await toCSVRow("files/marriage.csv");
		jsonData = await toJSON("files/marriage.csv");
		return res.status(200).json({ rowData, jsonData });
	} else if (req.params.content === "student") {
		rowData = await toCSVRow("files/student.csv");
		jsonData = await toJSON("files/student.csv");
		return res.status(200).json({ rowData, jsonData });
	} else if (req.params.content === "unemployment") {
		rowData = await toCSVRow("files/unemployment.csv");
		jsonData = await toJSON("files/unemployment.csv");
		return res.status(200).json({ rowData, jsonData });
	} else if (req.params.content === "animalCrossing") {
		rowData = await toCSVRow("files/animalCrossing.csv");
		jsonData = await toJSON("files/animalCrossing.csv");
		return res.status(200).json({ rowData, jsonData });
	} else if (req.params.content === "placement") {
		rowData = await toCSVRow("files/placement.csv");
		jsonData = await toJSON("files/placement.csv");
		return res.status(200).json({ rowData, jsonData });
	} else if (req.params.content === "coursera") {
		rowData = await toCSVRow("files/coursera.csv");
		jsonData = await toJSON("files/coursera.csv");
		return res.status(200).json({ rowData, jsonData });
	}
});

router.post("/upload", upload.any(), async (req, res, next) => {
	if (!req.files) {
		return next(new Error("No files uploaded"));
	}

	req.files.forEach(async (file) => {
		rowData = await toCSVRow(`${file.path}`);
		jsonData = await toJSON(`${file.path}`);
		fs.unlinkSync(file.path);
		return res.status(200).json({ rowData, jsonData });
	});
});

module.exports = router;
