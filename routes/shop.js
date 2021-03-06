var MinePage = require('../public/shop/MinePage');
var HomePage = require('../public/shop/HomePage');
var ListPage = require('../public/shop/ListPage');
var CartPage = require('../public/shop/CartPage');

var express = require('express');
var router = express.Router();
router.post('*', function(req, res, next) {
  console.log("req.url=" + req.url)
  console.log("req.path=" + req.path)
  console.log(req.body.response)

  let page = req.path.replace("/", "")
  console.log("page=" + page)

  switch (page) {
    case 'HomePage':
      HomePage(req, res)
      break
    case 'ListPage':
      ListPage(req, res)
      break
    case 'CartPage':
      CartPage(req, res)
      break
    case 'MinePage':
      MinePage(req, res)
      break
  }

});
module.exports = router;
