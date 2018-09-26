import app from './app';
import { Config } from './config';
import { ZiwoWs } from './ziwo';
import * as winston from 'winston';

const config = new Config();
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
  transports: [
    new winston.transports.Console({})
  ]
});
const ziwoWs = new ZiwoWs(config, logger);

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

app.listen(config.port, () => {
  logger.info('Express server listening on port ' + config.port);
});

ziwoWs.listen();
