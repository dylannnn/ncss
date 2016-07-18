(function (doc)
{
	var script = doc.createElement('script');

	script.type = 'text/javascript';
	script.src = '//rawgit.com/redaxmedia/ncss/master/dist/scripts/ncss.min.js';
	doc.body.appendChild(script);
}(document));