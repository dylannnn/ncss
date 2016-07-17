/**
 * @tableofcontents
 *
 * 1. validator
 *
 * @since 1.0.0
 *
 * @package NCSS
 * @author Henry Ruhs
 */

(function (doc, win)
{
	'use strict';

	/* @section 1. validator */
	
	win.ncss = win.ncss || {};

	var elementObject = doc.getElementsByTagName('*'),
		namespaceArray = win.prompt('Enter one or multiple namespaces', 'rs- rs-admin-').split(' '),
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

	for (i in namespaceArray)
	{
		for (j in ncss.setup)
		{
			providerKey = namespaceArray[i] + j;
			providerArray[providerKey] = ncss.setup[j];
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
					console.warn(tagName + '.' + className + ' (invalid tag)');
				}
			}
		}
	}
})(document, window);