const http = require('http');
const fs = require('fs');

/*

Web Server Configuration
Configured by jerryhost.tk

*/

const listenPort = 25570;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./pages/index.html', function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('404 Not Found!');
        } else {
            res.write(data);
        }
        res.end();
    })
});

server.listen(listenPort, function(err) {
    if (err) {
        return console.log('Error: ' + err);
    }
    console.log('Server is listening on port ' + listenPort);
});