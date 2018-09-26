import * as socketIo from 'socket.io-client';
import { Config } from './config';
import * as winston from 'winston';

export class ZiwoWs {
  public socket: socketIo;
  public logger: winston.Logger;

  constructor(config: Config, logger: winston.Logger) {
    this.socket = socketIo(config.ziwoApiUrl, {
      path: '/socket',
      query: 'access_token=' + config.ziwoAdminToken,
      reconnection: true
    });
    this.logger = logger;
  }

  public reconfigure(config: Config) {
    this.socket = socketIo(config.ziwoApiUrl, {
      path: '/socket',
      query: 'access_token=' + config.ziwoAdminToken,
      reconnection: true
    });
    this.listen();
  }

  public listen(): void {
    this.socket.on('GET /live/queues', this.queues);
    this.socket.on('GET /live/numbers', this.numbers);
    this.socket.on('GET /live/positions', this.positions);
    this.socket.on('GET /live/agents', this.agents);
    this.socket.on('GET /live/calls', this.calls);
    this.socket.on('GET /live/queueCalls', this.queueCalls);
    this.socket.on('GET /live/stats', this.stats);
  }
  private queues(data: any): void {
    //console.log(data);
  }
  private numbers(data: any): void {
    //console.log(data);
  }
  private positions(data: any): void {
    //console.log(data);
  }
  private agents(data: any): void {
    //console.log(data);
  }
  private calls(data: any): void {
    // TODO @hnb2 this.logger.debug
    console.log(JSON.stringify(data));
  }
  private queueCalls(data: any): void {
    //{"result":true,"content":[{"callID":"0422855b-101c-43fd-a713-895e59d3becc","sessionUUID":"0422855b-101c-43fd-a713-895e59d3becc","callerID":"0581805998","callerName":"0581805998","systemEPOCH":"1537964463","joinedEPOCH":"1537964463","bridgeEPOCH":"0","agentCCLogin":"unknown","queueName":"Loic-testing","state":"Waiting","score":"0"}],"info":{"status":200}}

    console.log(JSON.stringify(data));
  }
  private stats(data: any): void {
    //console.log(data);
  }
}
