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
  photouploadAction() {
    this.allowMethods="post";
    let rules={
      "files[]": "object|file|required"
    };
  }
  getphotoAction(){
    this.allowMethods="post";
  }
}
