const http = require("http");
const express = require("express");
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");
const bodyParser = require("body-parser");
const routes = require("./routes/v1");
const path = require("path");

const app = express();

/** Allow form-data from body */
app.use(bodyParser.urlencoded({ extended: false }));

/** Allow json data from body */
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, `./public`)));

/** Routes connection */
app.use("/v1", routes);

/** Whenever route not create and try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB();

/** Create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server listing port number ${config.port}`);
});
