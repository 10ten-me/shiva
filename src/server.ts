import app from './app';
import { Config } from './config';
import * as socketIo from 'socket.io-client';
import { ZiwoWs } from './ziwo';

var config = new Config();

app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
});

const socket = socketIo(config.ziwoApiUrl, {
    path: '/socket',
    query: 'access_token=' + config.ziwoAdminToken,
    reconnection: true
});

socket.on('GET /live/queues', ZiwoWs.queues());

socket.on('GET /live/numbers', function (data) {
    console.log(data);
});

socket.on('GET /live/positions', function (data) {
    console.log(data);
});

socket.on('GET /live/agents', function (data) {
    console.log(data);
});

socket.on('GET /live/calls', function (data) {
    console.log(data);
});

socket.on('GET /live/queueCalls', function (data) {
    console.log(data);
});
