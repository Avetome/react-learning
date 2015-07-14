var express = require("express");
var app = express();

// Serve static assets
app.use(express.static("./public"));
app.use("/src", express.static("./src"));
app.use("/vendor", express.static("./vendor"));

var port = process.env.PORT || 9999;

app.listen(port);

console.log("Running server on port " + port + ", press ctrl + c to stop.");
