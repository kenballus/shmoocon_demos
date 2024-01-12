require("http")
  .createServer((request, response) => {
    request
      .on("data", (_) => {})
      .on("end", () => {
        if (request.method == "DELETE") {
          response.end(
            `Now deleting ${request.url.toString()} ...\nHope nothing too important was there :)\n`,
          );
        } else {
          response.end(
            '<!DOCTYPE html><html lang="en"><body>Served up by Node.js</body></html>\n',
          );
        }
      });
  })
  .listen(80);
