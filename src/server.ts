import app from './app';
import { Config } from './config';
import { ZiwoWs } from './ziwo';

const config = new Config();
const ziwoWs = new ZiwoWs(config);

app.listen(config.port, () => {
    console.log('Express server listening on port ' + config.port);
});

ziwoWs.listen();
