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
    }
});

router.post("/tojson", () => {
    console.log("tojson route");
});

module.exports = router;
