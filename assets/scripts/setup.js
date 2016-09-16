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

	/* indicator */

	ncss.indicatorArray =
	{
		invalidClass: 'outline: 3px dashed rgba(255, 25, 25, 0.5)',
		invalidTag: 'outline: 3px dashed rgba(255, 170, 25, 0.5)'
	};

	/* wording */

	ncss.wordingArray =
	{
		enterNamespace: 'Enter one or multiple namespaces',
		invalidClass: 'invalid class',
		invalidTag: 'invalid tag',
		issueFound: 'issues found'
	};

	/* prefix */

	ncss.prefixArray =
	{
		/* structural classes */

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

		/* component classes */

		'component-': null,

		/* type classes */

		'audio':
		[
			'audio',
			'object'
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
		'caption':
		[
			'caption'
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
			'picture',
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
			'label'
		],
		'legend':
		[
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
		'progress':
		[
			'progress'
		],
		'set':
		[
			'fieldset'
		],
		'shape':
		[
			'cicle',
			'path',
			'rect',
			'symbol',
			'use'
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
			'object',
			'video'
		],
		'wrapper': null,

		/* functional classes */

		'is-': null,	
		'has-': null,
		'no-': null,
		'fn-': null,
		'js-': null
	};
})(window);
