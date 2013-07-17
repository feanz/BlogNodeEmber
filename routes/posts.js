
/*
 * GET users listing.
 */

var list = [
	{
  		title:'Blog One',
  		author:'Steve',
      into: "This is a blog post",
  		extended:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed est quis turpis vulputate ullamcorper. Nunc sodales mi vitae eros posuere ultrices. Nam condimentum nunc eu mi ornare scelerisque. Curabitur nec enim feugiat nulla dapibus rutrum. Nulla facilisi. Nunc pharetra elit sed velit luctus, id facilisis mi vulputate. Nullam sollicitudin condimentum nibh, sit amet gravida nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id enim purus.',
      publishedAt: new Date('2012-01-01')

  	},
  	{
  		title:'Blog Two',
  		author:'Dave',
      into: "This is a blog post too",
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed est quis turpis vulputate ullamcorper. Nunc sodales mi vitae eros posuere ultrices. Nam condimentum nunc eu mi ornare scelerisque. Curabitur nec enim feugiat nulla dapibus rutrum. Nulla facilisi. Nunc pharetra elit sed velit luctus, id facilisis mi vulputate. Nullam sollicitudin condimentum nibh, sit amet gravida nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id enim purus.',
      publishedAt: new Date('2012-06-15')
  	},
  	{
  		title:'Blog Three',
  		author:'Dave',
      into: "Another one",
  		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed est quis turpis vulputate ullamcorper. Nunc sodales mi vitae eros posuere ultrices. Nam condimentum nunc eu mi ornare scelerisque. Curabitur nec enim feugiat nulla dapibus rutrum. Nulla facilisi. Nunc pharetra elit sed velit luctus, id facilisis mi vulputate. Nullam sollicitudin condimentum nibh, sit amet gravida nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id enim purus.',
      publishedAt: new Date('2012-08-04')
  	}]


exports.single = function(req, res){
	var title = req.params.title;
	var posts; 
	/*.foreach(function(item){
		if(item.title == title){
			blog == this;
		}
	});*/
	res.json(list[0]);
} 

exports.list = function(req, res){
	res.json(list);
};