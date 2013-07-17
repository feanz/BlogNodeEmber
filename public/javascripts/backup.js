App.Blog = Ember.Object.extend({
  title: null,
  content: null,
  author: null,
  loaded: false,

  sample: function() {
    return this.get('content').substring(0,50) + " ...";          
  }.property('content')
});

App.Blog.reopenClass({
  find: function(title){
    var model = App.Blog.create();
    $.ajax('api/blogs/' + title,{
      type: 'GET'
    }).success(function(json){
      l.log(json);
      model.mergeAttributes(json);
      model.set('loaded', true);
    });

    return model;
  },
  findAll: function(title){
    l.log("find all");
    var model = [];
    $.ajax('api/blogs',{
      type: 'GET'
    }).success(function(json){
      l.log(json);
      json.forEach(function(blog){
        model.push(App.Blog.create(blog));
      })
    });

    return model;
  }
})



//Routes
App.BlogRoute = Ember.Route.extend({
  model: function(params){
    App.Blog.find(params.title);
  },
  renderTemplate: function(){    
    this.render('blog');
  }
});

App.BlogsRoute = Ember.Route.extend({
  model: function(params){
    App.Blog.findAll();
  },
  renderTemplate: function(){    
    this.render('blogs');
  }
});


var l = {
  log:function(message){
    console.log(message);
  }
}