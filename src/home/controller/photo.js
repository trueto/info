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
    this.assign("title","摄影图片");
    return this.display();
  }
  async photouploadAction(){
    var file=this.file("files[]");
    console.log(JSON.stringify(file));
    var filepath=file.path;
    let filename=file.originalFilename;
    //去除扩展名的文件名
    let param=filename.lastIndexOf('.') >= 0
                ? filename.slice(0,filename.lastIndexOf('.')):'';
    //文件上传后，需要将文件移动到项目其他地方，否则会在请求结束时删除掉该文件
    var uploadPath = think.RESOURCE_PATH + '/static/upload';
    think.mkdir(uploadPath);
    var basename = path.basename(filepath);
    fs.renameSync(filepath, uploadPath + '/' + basename);
    let url="/static/upload/"+basename;
    let arr=param.split('@');
    let data={
      title:arr[0],
      photodesc:arr[1],
      url:url
    }
    if (arr[2]==this.config('token')) {
      let insert=await this.model('photo').add(data);
      if (insert) {
        this.success(url);
      }
    }else {
        this.fail();
    }
  }
  async getphotoAction(){
    let num=this.post("page");
    let limit=this.post("limit");
    let searchValue="%"+this.post("searchValue")+"%";
    let data= await this.model('photo').where({"title|photodesc": ["like", searchValue]}).page(num,limit).order({id:"DESC"}).countSelect();
    if (data) {
      this.json(data);
    }
  }
}
