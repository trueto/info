'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  indexAction(){
    this.allowMethods="post";
    let rules={
      sex:"required",
      name:"required",
      avatar:"required",
      location:"required"
    };
  }
  resumeAction(){
    this.allowMethods="post";
  }
}