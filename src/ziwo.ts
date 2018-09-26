import * as socketIo from 'socket.io-client';
import { Config } from './config';

export class ZiwoWs {
  public socket: socketIo;

  constructor(config: Config) {
    this.socket = socketIo(config.ziwoApiUrl, {
      path: '/socket',
      query: 'access_token=' + config.ziwoAdminToken,
      reconnection: true
    });
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
    console.log(data);
  }
  private queueCalls(data: any): void {
    //console.log(data);
  }
  private stats(data: any): void {
    //console.log(data);
  }
}
