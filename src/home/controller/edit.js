'use strict';

import Base from './base.js';
var fs = require('fs');
var path = require('path');

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.assign("title","添加记录");
    return this.display();
  }
  async megAction() {
    this.assign("title","响应头");
    let params=this.post();
    let token = this.config('token');
    if (params.token!=token) {
      return this.redirect("/");
    }
    let data={
      date:params.date,
      mood:params.mood,
      title:params.title,
      content:params.content
    };
    let insert=await this.model('note').add(data);
    if (insert) {
      this.json(1);      
    }
    return this.display();
  }
  uploadAction() {
    var file=this.file("img");
    var filepath=file.path;
    //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
    var uploadPath = think.RESOURCE_PATH + '/static/upload';
    think.mkdir(uploadPath);
    var basename = path.basename(filepath);
    fs.renameSync(filepath, uploadPath + '/' + basename);
    var result="/static/upload/"+basename;
    return this.json(result);
  }
}
