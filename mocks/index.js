// const http = require("http");
// const mockserver = require("mockserver");

// const argv = require("yargs").argv;
// // const portAPI = argv.portAPI || 9001;
// const directory = argv.dir || "mocks";

// mockserver.headers = ["Authorization", "X-My-Header"];

// http.createServer(mockserver(directory)).listen(9001);

const http = require("http");
const mockserver = require("mockserver");

const argv = require("yargs").argv;
const portAPI = argv.portAPI || 9002;
const directory = argv.dir || "mocks";

process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});

const apiServer = (directory, port, verbose = true) => {
  http.createServer(mockserver(directory, verbose)).listen(port, (error) => {
    if (error) {
      console.log(`Mock server unhandled exception`, error);
      return;
    }

    if (verbose) {
      const url = `http://0.0.0.0:${port}`.green;
      console.log(`Mockserver serving ${directory} start: ${url}`);
    }
  });
};

apiServer(directory, portAPI, true);
