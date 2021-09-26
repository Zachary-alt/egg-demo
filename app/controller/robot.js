'use strict';

const Controller = require('egg').Controller;

class RobotController extends Controller {
  async index() {
    const { ctx } = this;
    const res = ctx.curl('http://localhost:7001/news -A "Baiduspider"');
    ctx.body = res;
  }
}

module.exports = RobotController;
