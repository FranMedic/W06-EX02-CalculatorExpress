require("dotenv").config();
const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT_CALCULATOR || 6000;

initializeServer(port);
