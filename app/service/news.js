'use strict';
const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const obj = {
      pageSize: 5,
      serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };
    const { serverUrl, pageSize } = obj;
    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
    });

    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );
    return newsList.map(res => res.data);
  }
}
module.exports = NewsService;
