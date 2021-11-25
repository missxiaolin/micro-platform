var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const versionDir = path.join(__dirname, '../version');

const initVersion = '1.0.0.0';

/* GET home page. */
router.get('/', function(req, res, next) {
  const name = req.query.name;
  // 确认要更新的版本号 每一个应用独立一个文件管理版本
  // 创建一个文件， 默认的版本号

  res.render('index', { title: 'Express' });
});

module.exports = router;
