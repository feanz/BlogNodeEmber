App = Ember.Application.create({
   LOG_TRANSITIONS: true
});

//Router
App.Router.map(function(){  
  this.resource('posts', function(){
    this.resource('post', { path: ':post_id'});
  });  
  this.resource('about');    
});

//Model
App.Model = Ember.Object.extend({
  mergeAttributes: function(attrs, builders) {
    var _this = this;
    _.each(attrs, function(v,k) {
      // If they're in a builder we use that
      var builder, col;
      if (typeof v === 'object' && builders && (builder = builders[k])) {
        if (!_this.get(k)) {
          _this.set(k, Em.A());
        }
        col = _this.get(k);
        _.each(v,function(obj) {
          col.pushObject(builder.create(obj));
        });
      } else {
        _this.set(k, v);
      }
    });
  }
})

App.Post = App.Model.extend({});

App.Post.reopenClass({
  findAll: function(){
    var model = Em.A()
    return $.ajax('api/posts',{
        type: 'GET'
      }).then(function(json){
        json.forEach(function(post){
          var post = App.Post.create(post);
          post.set('loaded', true);
          model.push(post);
        })        
        return model;
      });
    },
  find: function(post_id){
    var model = App.Post.create();
    return $.ajax('api/posts/' + post_id,{
        type: 'GET'
      }).then(function(json){
        model.mergeAttributes(json);
        model.set('loaded', true);        
        return model;
      });     
    return (model);
  }
})

//Controllers
App.PostController = Ember.ObjectController.extend({
  isEditing:false,
  canEdit: true,
  edit: function(){
    this.set('isEditing', true);
  },
  doneEditing: function(){
    l.log(this);
    /*$.ajax('api/posts',{
      type: 'PUT',
      data:
    })*/
    this.set('isEditing', false);
  }
});

  
//Routes
App.IndexRoute = Ember.Route.extend({
  redirect:function(){
    this.transitionTo('posts');  
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function(){     
     return App.Post.findAll();
    }  
});

App.PostRoute = Ember.Route.extend({
  model: function(params){       
   return App.Post.find(params.post_id);
  }  
});


//Helpers
Ember.Handlebars.registerBoundHelper('fromNow',function(date){
  if(date){
  return moment(date).fromNow();
}
return '';
});

var showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(input){  
  if(input){        
    return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
  }
  return '';
});

//utility
var l = {
  log:function(message){
    console.log(message);
  }
}