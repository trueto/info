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

  }
  megAction() {
    this.allowMethods="post";
    let rules={
      token:"required",
      date:"required",
      mood:"int|required",
      title:"required",
      content:"required"
    };
  }
  uploadAction() {
    this.allowMethods="post";
    let rules={
      img: "object|file|required"
    };
  }
}
