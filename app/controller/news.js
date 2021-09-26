'use strict';
// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    // const page = ctx.query.page || 1;
    // const newsList = await ctx.service.news.list(page);
    const newsList = [
      { url: 'xxx', title: '1', time: 100000 },
    ];
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
