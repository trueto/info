'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  openAction(self){
    var socket = this.http.socket;
    socket.on('message',function (data) {
      socket.emit('message', data);
    });
    // var io=this.http.io;
    // io.on('connection',function (socket) { 
    //   socket.on('message',function (data) {
    //     console.log(data); 
    //     io.emit('message', data);
    //    });
    //  });
  }
  closeAction(){
    var socket = this.http.socket;
  }
}