/**
 * @tableofcontents
 *
 * 1. setup
 *
 * @since 1.0.0
 *
 * @package NCSS
 * @author Henry Ruhs
 */

(function (win)
{
	'use strict';

	/* @section 1. setup */
	
	win.ncss = win.ncss || {};

	/* misc */

	ncss.version = '1.0.0';

	/* wording */

	ncss.wording =
	{
		enterNamespace: 'Enter one or multiple namespaces',
		invalidClass: 'invalid class',
		invalidTag: 'invalid tag'
	};

	/* setup */

	ncss.setup =
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
	};
})(window);