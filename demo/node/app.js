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
            '<!DOCTYPE html>\n<html lang="en">\n  <body>\n    Served up by Node.js\n  </body>\n</html>\n',
          );
        }
      });
  })
  .listen(80);
