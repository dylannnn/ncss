(function (doc)
{
	'use strict';

	var elementObject = doc.getElementsByTagName('*'),
		namespaceArray = prompt('Enter one or multiple namespaces', 'rs- rs-admin-').split(' '),
		prefixArray =
		[
			'content',
			'address',
			'body',
			'footer',
			'header',
			'main',
			'navigation',
			'section',
			'sidebar',
			'component-',
			'audio',
			'box',
			'break',
			'button',
			'code',
			'col',
			'data',
			'field',
			'form',
			'frame',
			'image',
			'item',
			'label',
			'link',
			'list',
			'modal',
			'overlay',
			'shape',
			'set',
			'table',
			'row',
			'text',
			'title',
			'video',
			'wrapper',
			'is-',
			'fn-',
			'has-',
			'js-'
		],
		providerArray = [],
		resultArray = [],
		resultObject,
		classArray,
		className,
		i,
		j,
		k;

	/* create provider */

	for (var i in namespaceArray)
	{
		for (var j in prefixArray)
		{
			providerArray.push(namespaceArray[i] + prefixArray[j]);
		}
	}

	/* proccess element */

	for (i in elementObject)
	{
		classArray = elementObject[i].className ? elementObject[i].className.split(' ') : null;
		for (j in classArray)
		{
			className = classArray[j];
			if (className.length)
			{
				for (k in providerArray)
				{
					if (className.startsWith(providerArray[k]))
					{
						resultArray[className] = true;
					}
					else if (!resultArray[className])
					{
						resultArray[className] = false;
					}
				}
			}
		}
	}

	/* proccess result */

	for (i in resultArray)
	{
		if (!resultArray[i])
		{
			resultObject = doc.getElementsByClassName(i);
			for (j in resultObject)
			{
				if (typeof resultObject[j] === 'object')
				{
					resultObject[j].style = 'outline: 3px dashed rgba(255, 25, 25, 0.5)';
				}
			}
			console.warn(i);
		}
	}
})(document);