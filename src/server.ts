import app from './app';
import { Config } from './config';
import * as socketIo from 'socket.io-client';

app.listen(Config.port, () => {
    console.log('Express server listening on port ' + Config.port);
});

const socket = socketIo(Config.ziwo_api_url, {
    path: '/socket',
    query: 'access_token=' + Config.ziwo_admin_token,
    reconnection: true
});

socket.on('GET /live/queues', function (data) {
    console.log('queues:' + data);
});

socket.on('GET /live/calls', function (data) {
    console.log('calls' + data);
});
