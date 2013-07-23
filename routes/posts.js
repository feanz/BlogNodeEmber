
/*
 * GET posts.
 */

var _ = require('underscore')._;

//mongo db
var databaseUrl = "test"; 
var collections = ["posts"]
var db = require("mongojs").connect(databaseUrl, collections);

exports.single = function(req, res){
	var id = req.params.post_id;	 
    db.posts.findOne({id: parseInt(id)}, function(err, post){
    if(err || !post){
      console.log("no post found");
      res.send(404);
    }else{      
      res.json(post);
    }
  });  	
} 

exports.list = function(req, res){
	db.posts.find({ $query: {}, $orderby: { publishedAt: -1}},function(err, posts){
    if(err || !posts){
      console.log("no posts found");
      res.send(404);
    }else{      
      res.json(posts);
    }
  });  
};

exports.insert = function(req, res){
  console.log("insert");
  var post = req.body.post;
  db.posts.save(post,function(err, saved){
    if(err || !saved){
      console.log("Post not saved")
      res.send(500);
    }else{
      res.json(saved)
    }
  });
}

exports.update = function(req, res){
  console.log("update");  
  var post = req.body.post;  
  db.posts.update({id:parseInt(post.id)},{ $set: { title: post.title, intro: post.intro, publishedAt: post.publishedAt, extended: post.extended }}, function(err, updated){
    if(err || !updated){
      res.send(500);
      console.log("post not updated");      
    }else{
      res.json(updated);
    }
  });  
}