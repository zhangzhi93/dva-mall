import Mock from 'mockjs';

let db = Mock.mock({
  'data|36': [
    {
      'key|+1': 1,
      name: '@name',
      'age|18-32': 1,
      'address': '@county(true)'
    }]
});

export default {
  'GET /api/getList': (req, res) => {
    console.log('success');
    let resData = {
      data: [],
      pages: 1,
      pageNum: 1,
      pageSize: 10,
      total: 0
    };
    const { query } = req
    let { pageSize, page } = query;
    resData.pageNum = page ? parseInt(page, 10) : 1;
    resData.pageSize = pageSize || 10;
    resData.data = db.data.slice((resData.pageNum - 1) * resData.pageSize, resData.pageNum * resData.pageSize);
    resData.pages = Math.ceil(db.data.length / resData.pageSize);
    resData.total = db.data.length;
    res.status(200).json(resData);
  },
  'GET /api/user'(req, res) {
    res.json({
      message: 'get success!'
    });
  }
}
