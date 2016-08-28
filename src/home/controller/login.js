'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let params=this.post();
    let str=params.avatar;
    let data={
      sex:params.sex,
      name:params.name,
      avatar:params.avatar,
      location:params.location
    };
    let insert=await this.model('login').thenAdd(data,{avatar:str});
  }
  async resumeAction(){
    let data=await this.model('resume').where({ ison: 1 }).find();
    this.json(data);
  }
}