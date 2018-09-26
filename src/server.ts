import app from './app';
import { Config } from './config';
import * as socketIo from 'socket.io-client';

var config = new Config();

app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
});

const socket = socketIo(config.ziwoApiUrl, {
    path: '/socket',
    query: 'access_token=' + config.ziwoAdminToken,
    reconnection: true
});

socket.on('GET /live/queues', function (data) {
    console.log('queues:' + data);
});

socket.on('GET /live/calls', function (data) {
    console.log('calls' + data);
});
