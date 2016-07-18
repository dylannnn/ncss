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

	ncss.namespace = win.prompt(ncss.wordingArray.enterNamespace, localStorage.getItem('namespace-' + location.host) || '');
	ncss.namespaceArray = ncss.namespace.split(' ');
	localStorage.setItem('namespace-' + location.host, ncss.namespace);	

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

	ncss.validateElement = function (element, providerArray, indicatorArray, wordingArray)
	{
		var providerTotal = Object.keys(ncss.providerArray).length,
			invalidCounter = 0,
			issueCounter = 0,
			classArray,
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
					invalidCounter = 0;

					/* process provider */

					for (k in providerArray)
					{
						if (className.startsWith(k))
						{
							element[i].validTag = providerArray[k] ? providerArray[k].indexOf(tagName) > -1 : true;
						}
						else
						{
							element[i].validClass = ++invalidCounter < providerTotal;
						}
					}

					/* indicator and console */

					if (!element[i].validClass)
					{
						element[i].style = indicatorArray.invalidClass;
						console.warn(tagName + '.' + classArray.join('.') + ' (' + wordingArray.invalidClass + ')');
						issueCounter++;
					}
					else if (!element[i].validTag)
					{
						element[i].style = indicatorArray.invalidTag;
						console.warn(tagName + '.' + classArray.join('.') + ' (' + wordingArray.invalidTag + ')');
						issueCounter++;
					}
				}
			}
		}
		console.info(issueCounter + ' ' + wordingArray.issueFound);
	};

	/* @section 1.3 init */

	ncss.init = function ()
	{
		ncss.providerArray = ncss.createProvider(ncss.prefixArray, ncss.namespaceArray);
		ncss.validateElement(ncss.element, ncss.providerArray, ncss.indicatorArray, ncss.wordingArray);
	};

	/* init */

	ncss.init();
})(document, window);