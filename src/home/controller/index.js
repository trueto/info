'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.assign("title","info首页");
    return this.display();
  }
  async noteAction(){
    var num=this.post('page');
    let limit=this.post('limit');
    let searchValue="%"+this.post("searchValue")+"%";
    let data= await this.model('note').where({"title|content": ["like", searchValue]}).page(num,limit).order({id:"DESC"}).countSelect();
    if (data) {
      this.json(data);
    }
  }
  downloadAction(){
    this.assign("title","下载InfoApp");
    return this.display();
  }
  getapkAction(){
    let filename=think.RESOURCE_PATH + '/static/download/H5C4C964C_0814095311.apk';
    this.download(filename);
  }
}
