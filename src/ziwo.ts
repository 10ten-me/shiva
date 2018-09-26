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

  public listen() {
    this.socket.on('GET /live/queues', this.queues);
    this.socket.on('GET /live/numbers', this.numbers);
    this.socket.on('GET /live/positions', this.positions);
    this.socket.on('GET /live/agents', this.agents);
    this.socket.on('GET /live/calls', this.calls);
    this.socket.on('GET /live/queueCalls', this.queueCalls);
    this.socket.on('GET /live/stats', this.stats);
  }
  public queues(data: any) {
    console.log(data);
  }
  public numbers(data: any) {
    console.log(data);
  }
  public positions(data: any) {
    console.log(data);
  }
  public agents(data: any) {
    console.log(data);
  }
  public calls(data: any) {
    console.log(data);
  }
  public queueCalls(data: any) {
    console.log(data);
  }
  public stats(data: any) {
    console.log(data);
  }
}
