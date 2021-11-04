const express = require("express");
var http = require('http');
require('dotenv').config();

const initWebRoutes = require("./routes/web");

let app = express();
let server = http.createServer(app);

app.use("/", initWebRoutes());


// lấy tham số trong file .env môi trường
let port = process.env.PORT || 6969; // ||hoặc
// PORT === undefined thì gán vào 6969

server.listen(port, () => {
    console.log(`app is running at port: http://localhost:${port}`);
});