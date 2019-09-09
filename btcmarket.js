const WebSocket = require('ws');
const ws = new WebSocket('wss://socket.btcmarkets.net/v2');

var request = {
    marketIds:['BTC-AUD'],
    channels: ['tick'],
    messageType: 'subscribe'
}

ws.on('open', function open() {
    ws.send(JSON.stringify(request));
});

ws.on('message', function incoming(data) {
    const object = JSON.parse(data)
   console.log("LTP "+object.lastPrice, "Time "+object.timestamp) ;
   // console.log(data);
});