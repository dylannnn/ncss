(function (doc)
{
	'use strict';

	var elementObject = doc.getElementsByTagName('*'),
		namespaceArray = prompt('Enter one or multiple namespaces', 'rs- rs-admin-').split(' '),
		prefixArray =
		{
			'content':
			[
				'article'
			],
			'address':
			[
				'address'
			],
			'body':
			[
				'body'
			],
			'footer':
			[
				'footer'
			],
			'header':
			[
				'header'
			],
			'main':
			[
				'main'
			],
			'navigation':
			[
				'nav'
			],
			'section':
			[
				'section'
			],
			'sidebar':
			[
				'aside'
			],
			'component-': null,
			'audio':
			[
				'audio'
			],
			'box':
			[
				'blockquote',
				'div'
			],
			'break':
			[
				'hr'
			],
			'button':
			[
				'a',
				'button'
			],
			'code':
			[
				'code',
				'pre'
			],
			'col':
			[
				'td',
				'th'
			],
			'data':
			[
				'datalist'
			],
			'field':
			[
				'input',
				'select',
				'textarea'
			],
			'form':
			[
				'form'
			],
			'frame':
			[
				'iframe'
			],
			'image':
			[
				'img',
				'object',
				'svg'
			],
			'item':
			[
				'dd',
				'dt',
				'li'
			],
			'label':
			[
				'label',
				'legend'
			],
			'link':
			[
				'a'
			],
			'list':
			[
				'dl',
				'ol',
				'ul'
			],
			'modal':
			[
				'div'
			],
			'overlay':
			[
				'div'
			],
			'shape':
			[
				'cicle',
				'path',
				'rect',
				'symbol',
				'use'
			],
			'set':
			[
				'fieldset'
			],
			'table':
			[
				'table'
			],
			'row':
			[
				'tr'
			],
			'text':
			[
				'em',
				'small',
				'span',
				'strong',
				'p'
			],
			'title':
			[
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6'
			],
			'video':
			[
				'iframe',
				'video'
			],
			'wrapper': null,
			'is-': null,
			'fn-': null,
			'has-': null,
			'js-': null
		},
		providerArray = [],
		resultArray = [],
		providerKey,
		classArray,
		className,
		tagName,
		i,
		j,
		k;

	/* create provider */

	for (var i in namespaceArray)
	{
		for (var j in prefixArray)
		{
			providerKey = namespaceArray[i] + j;
			providerArray[providerKey] = prefixArray[j];
		}
	}

	/* process element */

	for (i in elementObject)
	{
		resultArray[i] = resultArray[i] || {};
		classArray = elementObject[i].className ? elementObject[i].className.split(' ') : null;
		tagName = elementObject[i].tagName ? elementObject[i].tagName.toLowerCase() : null;
		for (j in classArray)
		{
			className = classArray[j];
			if (className.length)
			{
				for (k in providerArray)
				{
					if (className.startsWith(k))
					{
						resultArray[i] =
						{
							validClass: true,
							validTag: providerArray[k] ? providerArray[k].indexOf(tagName) > -1 : true
						};

					}
					else if (!resultArray[i].validClass)
					{
						resultArray[i] =
						{
							validClass: false
						};
					}
				}
				if(!resultArray[i].validClass)
				{
					elementObject[i].style = 'outline: 3px dashed rgba(255, 25, 25, 0.5)';
					 console.error(className + ' (invalid class)');
				}
				else if(!resultArray[i].validTag)
				{
					elementObject[i].style = 'outline: 3px dashed rgba(255, 170, 25, 0.5)';
					console.warn(className + ' (invalid <' + tagName + '> tag)');
				}
			}
		}
	}
})(document);