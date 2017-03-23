var http = require('http');
var fs = require('fs');

//crear un servidor escuchando el puerto 8124
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola, mundo');
}).listen(8124);


//crear una carpeta usando el modulo fs de node
fs.mkdir('./log/', function (err) {
    if (err) {
        console.log('no se pudo crear el directorio');
    }
});

console.log('servidor en linea');