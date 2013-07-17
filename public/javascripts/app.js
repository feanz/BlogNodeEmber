App = Ember.Application.create();

//Router
App.Router.map(function(){  
  this.resource('about');  
  this.resource('posts');  
});

//Model
App.Post = Ember.Object.extend({
  loaded: false,
  title: null,  
  author: null,  
  intro: null,
  extended: null,
  publishedAt: null,

  sample: function() {
    return this.get('extended').substring(0,50) + " ...";          
  }.property('extended')
});

//Routes
App.PostsRoute = Ember.Route.extend({
  model: function(){
     l.log("posts route");
    var model = [];
    return $.ajax('api/posts',{
      type: 'GET'
    }).success(function(json){
      l.log(json);
      json.forEach(function(post){
        model.push(App.Post.create(post));
      })
      return model;
    });
  }
});


//utility
var l = {
  log:function(message){
    console.log(message);
  }
}