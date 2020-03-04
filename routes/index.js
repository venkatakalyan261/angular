var express = require('express');
var monk=require('monk');
var db=monk('localhost:27017/users');
var user=db.get("user");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postdata', function(req,res){
   console.log(req.body)
   user.insert(req.body,function(err,docs){
    console.log(docs);
   });
 router.post('/update', function(req,res){
   console.log(req.body)
   user.update({"_id":req.body._id},{$set:req.body},function(err,docs){
    console.log(docs);
   });

});

router.get('/getdata', function(req,res){
user.find({}, function(err,docs){
res.send(docs)
})
});

module.exports = router;