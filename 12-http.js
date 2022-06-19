const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Welcome to our home page');
        return;
    }
    if (req.url === "/about") {
        res.end('Some info about our history');
        return
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>Something went wrong</p>
        <a href="/">Go back to home page</a>
    `);

});

server.listen(5000);
