var express = require('express');
var router = express.Router();

var list = ['jack', 'rose', 'aaa', 'bbb', 'wz', 'wc', 'zj', 'lzj', 'jtx'];

router.route('/list')
  .get(function(req, res) {
    console.log('list GET');
    res.json({
      status: 200,
      info: '查询列表成功',
      list
    });
  })
  .post(function(req, res) {
    console.log('list POST', req.body);
    list.push(req.body.item);
    res.json({
      status: 200,
      info: '成功',
      list
    });
  })
  .delete(function(req, res) {
    console.log('list DELETE', req.body);
    list.splice(req.body.index, 1);
    res.json({
      status: 200,
      info: '成功',
      list
    });
  });

module.exports = router;
