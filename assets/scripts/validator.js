/**
 * @tableofcontents
 *
 * 1. validator
 *    1.1 create provider
 *    1.2 validate element
 *    1.3 init
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

	/* element */

	ncss.element = doc.getElementsByTagName('*');

	/* namespace */

	ncss.namespaceArray = win.prompt(ncss.wordingArray.enterNamespace, 'rs- rs-admin-').split(' ');

	/* @section 1.1 create provider */

	ncss.createProvider = function (prefixArray, namespaceArray)
	{
		var providerArray = [],
			providerKey,
			i,
			j;

		/* process namespace */

		for (i in namespaceArray)
		{
			/* process prefix */
			
			for (j in prefixArray)
			{
				providerKey = namespaceArray[i] + j;
				providerArray[providerKey] = prefixArray[j];
			}
		}
		return providerArray;
	};

	/* @section 1.2 validate element */

	ncss.validateElement = function (element, providerArray, wordingArray)
	{
		var classArray,
			className,
			tagName,
			i,
			j,
			k;

		/* process element */

		for (i in element)
		{
			classArray = element[i].className ? element[i].className.split(' ') : null;
			tagName = element[i].tagName ? element[i].tagName.toLowerCase() : null;

			/* process class */

			for (j in classArray)
			{
				className = classArray[j];
				if (className.length)
				{					
					/* process provider */
					
					for (k in providerArray)
					{
						if (className.startsWith(k))
						{
							element[i].validClass = true;
							element[i].validTag = providerArray[k] ? providerArray[k].indexOf(tagName) > -1 : true;
						}
					}

					/* render indicators */

					if(!element[i].validClass)
					{
						element[i].style = 'outline: 3px dashed rgba(255, 25, 25, 0.5)';
						console.error(tagName + '.' + className + ' (' + wordingArray.invalidClass + ')');
					}
					else if(!element[i].validTag)
					{
						element[i].style = 'outline: 3px dashed rgba(255, 170, 25, 0.5)';
						console.warn(tagName + '.' + className + ' (' + wordingArray.invalidTag + ')');
					}
				}
			}
		}
	};

	/* @section 1.3 init */

	ncss.init = function ()
	{
		ncss.providerArray = ncss.createProvider(ncss.prefixArray, ncss.namespaceArray);
		ncss.validateElement(ncss.element, ncss.providerArray, ncss.wordingArray);
	};

	/* init */

	ncss.init();
})(document, window);