var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
var childProcess = require('child_process')
var versionDir = path.join(__dirname, '../version');

var initVersion = '1.0.0.0';

/* GET home page. */
router.get('/', function(req, res, next) {
  let response = {
    success: true
  }
  const name = req.query.name;

  if (!name) {
    return res.json({
      success: false,
      errorMessage: 'name必传'
    })
    
  }
  // 确认要更新的版本号 每一个应用独立一个文件管理版本
  // 创建一个文件， 默认的版本号

  // 创建一个当前应用的路径
  const currentUrl = path.join(versionDir, name);
  // console.log(currentUrl)

  res.render('index', { title: 'Express' });
});

module.exports = router;
