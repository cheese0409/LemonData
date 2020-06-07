const router = require("express").Router();
const { toCSVRow, toJSON } = require("./util");

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

router.post("/tojson", () => {
	console.log("tojson route");
});

module.exports = router;
