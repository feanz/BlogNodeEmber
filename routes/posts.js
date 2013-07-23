
/*
 * GET posts.
 */

var _ = require('underscore')._;

var list = [
	{
      id: 1,
  		title:'Node made easy',
  		author:'Steve Ballbag',
      intro: "Morbi dictum magna vitae mi malesuada laoreet.",
  		extended:"Ut erat nisl, dignissim et iaculis ac, adipiscing non ipsum. Vipamus ornare hendrerit sapien ut ornare. Morbi dictum magna vitae mi malesuada laoreet.\
      `<?php echo('Hello World!'); ?>`\
      `<p>Hello Workd!</p>`\
       Proin tempus laoreet leo in lobortis. In sit amet ipsum vel massa fringilla volutpat. Aenean dictum odio in ligula egestas iaculis. Maecenas ut massa quis velit\
        consectetur faucibus in in lectus. Praesent ac mauris nec tortor suscipit aliquam eu nec justo. Nulla facilisi. Curabitur sit amet ligula ante.",
      publishedAt: new Date('2012-01-01')
  	},
  	{
      id: 2,
  		title:'Is f# the new lisp',
  		author:'Dave Shitscreen',
      intro: "Sed a sapien nec libero semper scelerisque at eget nisl.",
  		extended:"######Nunc vestibulum leo\
        Sed a sapien nec libero semper a lorem pulvinar ut convallis odio iaculis. Sed a sapien nec libero semper scelerisque at eget nisl. Vestibulum urna ligula,\
        facilisis sed blandit nec, placerat eget augue. Nulla ultrices hendrerit mauris, quis hendrerit mi bibendum eget. Etiam quam justo, sollicitudin in tempus ac,\
        tristique eget elit. Vivamus fermentum libero id magna mollis eleifend. Integer blandit libero in est hendrerit sollicitudin. Pellentesque ac orci id magna\
        ullamcorper laoreet ut vitae nisl. Aliquam erat volutpat. Ut imperdiet condimentum nisi non aliquet. Vivamus sit amet consectetur sapien. Phasellus varius interdum urna,\
        eget mattis justo faucibus vel. Aliquam elementum, magna ut pretium molestie, erat orci eleifend tellus, sit amet rhoncus arcu odio eu sem. Proin lobortis mi ac ante luctus porta.\
        Mauris sit amet vestibulum orci.\
        >Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue. Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.\
        Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.\
        Duis faucibus consectetur ante vel accumsan. Donec quis felis et ipsum blandit consectetur ut sit amet nisi. Nunc faucibus pellentesque auctor. Fusce ac porta est. Suspendisse potenti.\
        Sed pellentesque quam arcu. Praesent vel enim ligula. Integer aliquet semper metus vitae iaculis. Nunc justo dolor, posuere eget volutpat in, accumsan ac lorem. Nam at scelerisque ante.\
        Aliquam ut augue turpis, eget mattis nibh. Suspendisse urna mauris, pharetra vitae laoreet non, tempor sit amet metus. Donec risus diam, tincidunt id elementum sed, ultrices id neque.\
        Curabitur sed nisl non sem gravida malesuada et dapibus justo. Nullam in sagittis magna. Aliquam erat volutpat. Suspendisse potenti. Fusce id posuere orci. In sed vestibulum dolor.\
        Phasellus volutpat eleifend purus sed vestibulum. Ut dolor massa, volutpat nec elementum vel, vestibulum in mi. Donec fringilla dignissim risus.", 
      publishedAt: new Date('2012-06-15')
    },
    {
       id: 3,       
       title:'Why i love scarla',
       author:'Nat Dicksplash',
       intro: "Vestibulum urna ligula facilisis sed blandit nec",
       extended:" Sed a sapien nec libero semper a lorem pulvinar ut convallis odio iaculis. Sed a sapien nec libero semper scelerisque at eget nisl. Vestibulum urna ligula,\
        facilisis sed blandit nec, placerat eget augue. Nulla ultrices hendrerit mauris, quis hendrerit mi bibendum eget. Etiam quam justo, sollicitudin in tempus ac,\
        tristique eget elit. Vivamus fermentum libero id magna mollis eleifend. Integer blandit libero in est hendrerit sollicitudin. Pellentesque ac orci id magna\
        ullamcorper laoreet ut vitae nisl. Aliquam erat volutpat. Ut imperdiet condimentum nisi non aliquet. Vivamus sit amet consectetur sapien. Phasellus varius interdum urna,\
        eget mattis justo faucibus vel. Aliquam elementum, magna ut pretium molestie, erat orci eleifend tellus, sit amet rhoncus arcu odio eu sem. Proin lobortis mi ac ante luctus porta.\
        Mauris sit amet vestibulum orci.\
        ![kittens!](http://placekitten.com/400/500 'Kitten from placekitten.com')",       
       publishedAt: new Date('2012-08-04')       
  	}]


exports.single = function(req, res){
	var id = req.params.post_id;	  
	var post = _.find(list,function(p){
    return p.id == id;
  });  
	res.json(post);
} 

exports.list = function(req, res){
	res.json(list);
};