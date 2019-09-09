var io = require('io');
var socket = io('ws://ws-feed.zebpay.com/marketdata',{transports: ['websocket']});
socket.on('connect', function () {

console.log('Connected!').on
socket.on('message', function (msg) {
// my msg

});
});