const csv = require("csvtojson");

module.exports.toCSVRow = function(path) {
    return csv({ noheader: true, output: "csv" }).fromFile(path);
};

module.exports.toJSON = function(path) {
    return csv().fromFile(path);
};
