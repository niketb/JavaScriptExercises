var net = require('net');
var eol = require('os').EOL;

var srvr = net.createServer();
var clientList = [];

srvr.on('connection', function(client) {
  client.name = client.remoteAddress + ':' + client.remotePort;
  client.write('Welcome, ' + client.name + eol);
  clientList.push(client);

  client.on('data', function(data) {
    d = data.toString();
    if(d === "\\list") {
      listAllUsers(client);  
    } else if(/\\rename <\w+>/.test(d)) {
      var newName = d.slice(9, d.length - 1);
      var oldName = client.name;
      client.name = newName;
      update = oldName + " has renamed themselves as " + newName + eol;
      broadcast(update, client); 
    } else if(/\\private <\w+> <.+>/.test(d)) {
      var privateRecipient = d.slice(10, d.indexOf(">"));
      var message = d.slice(d.indexOf(">") + 3, d.length - 1) + eol;
      var clientId = -1;
      for (var i in clientList) {
        if (clientList[i].name === privateRecipient) {
          clientId = i;
          break;
        }
      }
      console.log(privateRecipient + " " + clientId);
      if (clientId > -1) {
        clientList[clientId].write(message);  
      } else {
        client.write("ERROR: Recipient not found" + eol);
      }
    } else if(/\\.+/.test(d)) {
      client.write("ERROR: Invalid command" + eol); 
    } else {
      broadcast(data, client);
    }
  });
});

function broadcast(data, client) {
  for (var i in clientList) {
    if (client !== clientList[i]) {
      clientList[i].write(client.name + " says " + data + eol);
    }
  }
}

function listAllUsers(client) {
  for (var i in clientList) {
    if (client !== clientList[i]) {
      client.write(clientList[i].name + eol);
    }
  }
}

srvr.listen(9000);