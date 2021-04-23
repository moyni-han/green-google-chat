

var http = require('http');
const WebSocket = require('ws');
const express = require('express');

const app = express();
const server = http.createServer(app);
//server.on('request', app);

const port = 3000;

app.use(express.static('public'));
const wss = new WebSocket.Server({server});

var count = 0;
var names = ["anonymous chinchilla", "dedicated panther", "sophisticated elephant", "interesting dingo", "suprised koala", "mischevious mouse", "relaxed duck", "dedicated dog", "wondering wombat"];

//var table = {};


wss.on('connection', function connection(ws){

  ws.id = names.pop(); //adding an id property to each ws object
  //table["Client" + count] = ws;
  count++;

  //table["Client" + count] = ws;

  ws.send("you successfully connected to the server.")

  ws.on('message', function message(e) {
    //ws.send("I'm good. How are you?");
    //loop through the set of connected clients and send them all a messages
    wss.clients.forEach(function(client){
      client.send(` ${ws.id} said: ${e}`); //string interpolation
    })
    //table["Client0"].send("You get an extra message");
  })

})




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });
server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});