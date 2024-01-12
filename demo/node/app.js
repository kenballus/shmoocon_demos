require('http').createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        response.end(JSON.stringify({
            "uri": request.url.toString(),
            "method": request.method,
        }));
        console.log(`Got a ${request.method} request for ${request.url.toString()}`);
    });
}).listen(80);
