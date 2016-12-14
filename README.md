NCSS
====

> NCSS is a naming convention for semantic CSS. Get rid of reading your HTML again and again to find out what elements, tags and sections are affected.

[![Build Status](https://img.shields.io/travis/redaxmedia/ncss.svg)](https://travis-ci.org/redaxmedia/ncss)
[![Dependency Status](https://gemnasium.com/badges/github.com/redaxmedia/ncss.svg)](https://gemnasium.com/github.com/redaxmedia/ncss)
[![GitHub Stats](https://img.shields.io/badge/github-stats-ff5500.svg)](http://githubstats.com/redaxmedia/ncss)


Why
---

Massive CSS on **larger projects** used to cause issues:

- Teamwork without uniform conventions
- Missing context to the project's layout and structure
- Big ball of mud instead of modularization
- Lack of inline documentation
- No possibility for automated validation


Getting started
---------------

There is no specification the use **hyphen**, **underscore** or **camelcase** for your classnames - it is upon your personal preference, but we recommended to use the language's native hyphen style.

**N**amed **C**ascading **S**tyle **S**heets are divided into:

- [Structural classes](#structural-classes)
- [Component classes](#component-classes)
- [Type classes](#type-classes)
- [Modifier classes](#modifier-classes)
- [Functional classes](#functional-classes)
- [Namespaces](#namespaces)
- [Exceptions](#exceptions)


Structural classes
------------------

Structural classes provide a **semantic context** for the underlaying elements and are preferably utilized to define a layout.

Syntax: <code>.{context}</code> and <code>.{context}-{name}</code>

<table>
	<thead>
		<tr>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>article</td>
			<td>.content</td>
		</tr>
		<tr>
			<td>address</td>
			<td>.address</td>
		</tr>
		<tr>
			<td>body</td>
			<td>.body</td>
		</tr>
		<tr>
			<td>footer</td>
			<td>.footer</td>
		</tr>
		<tr>
			<td>header</td>
			<td>.header</td>
		</tr>
		<tr>
			<td>main</td>
			<td>.main</td>
		</tr>
		<tr>
			<td>nav</td>
			<td>.navigation</td>
		</tr>
		<tr>
			<td>section</td>
			<td>.section</td>
		</tr>
		<tr>
			<td>side</td>
			<td>.sidebar</td>
		</tr>
	</tbody>
</table>


Component classes
-----------------

Component classes provide a **group context** for the underlaying elements and are preferably utilized to define a working unit.

Syntax: <code>.component-{name}</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>component-</td>
			<td>*</td>
			<td>.component-accordion</td>
		</tr>
	</tbody>
</table>


Type classes
------------

Type classes are the foundation to write **re-usable**, **modular** and **semantic** CSS - tell the reader what kind of elements, tags and sections are affected. Keep in mind that structural tags are rather unsuitable to contain a **type** prefix.

Syntax: <code>.{type}</code> and <code>.{type}-{context}</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>audio-</td>
			<td>audio, object</td>
			<td>.audio-content</td>
		</tr>
		<tr>
			<td>box-</td>
			<td>div</td>
			<td>.box-content</td>
		</tr>
		<tr>
			<td>break-</td>
			<td>hr</td>
			<td>.break-content</td>
		</tr>
		<tr>
			<td>button-</td>
			<td>a, button</td>
			<td>.button-content</td>
		</tr>
		<tr>
			<td>caption-</td>
			<td>caption</td>
			<td>.caption-content</td>
		</tr>
		<tr>
			<td>code-</td>
			<td>code, pre</td>
			<td>.code-content</td>
		</tr>
		<tr>
			<td>col-</td>
			<td>td, th</td>
			<td>.col-content</td>
		</tr>
		<tr>
			<td>data-</td>
			<td>datalist</td>
			<td>.data-content</td>
		</tr>
		<tr>
			<td>field-</td>
			<td>input, select, textarea</td>
			<td>.field-content</td>
		</tr>
		<tr>
			<td>form-</td>
			<td>form</td>
			<td>.form-content</td>
		</tr>
		<tr>
			<td>frame-</td>
			<td>iframe</td>
			<td>.frame-content</td>
		</tr>
		<tr>
			<td>image-</td>
			<td>img, object, picture, svg</td>
			<td>.image-content</td>
		</tr>
		<tr>
			<td>item-</td>
			<td>dd, dt, li</td>
			<td>.item-content</td>
		</tr>
		<tr>
			<td>label-</td>
			<td>label</td>
			<td>.label-content</td>
		</tr>
		<tr>
			<td>legend-</td>
			<td>legend</td>
			<td>.legend-content</td>
		</tr>
		<tr>
			<td>link-</td>
			<td>a</td>
			<td>.link-content</td>
		</tr>
		<tr>
			<td>list-</td>
			<td>dl, ol, ul</td>
			<td>.list-content</td>
		</tr>
		<tr>
			<td>modal-</td>
			<td>div</td>
			<td>.modal-content</td>
		</tr>
		<tr>
			<td>overlay-</td>
			<td>div</td>
			<td>.overlay-content</td>
		</tr>
		<tr>
			<td>progress-</td>
			<td>progress</td>
			<td>.progress-content</td>
		</tr>
		<tr>
			<td>quote-</td>
			<td>blockquote, citie</td>
			<td>.quote-content</td>
		</tr>
		<tr>
			<td>set-</td>
			<td>fieldset</td>
			<td>.set-content</td>
		</tr>
		<tr>
			<td>shape-</td>
			<td>cicle, path, rect, symbol, use</td>
			<td>.shape-content</td>
		</tr>
		<tr>
			<td>table-</td>
			<td>table</td>
			<td>.table-content</td>
		</tr>
		<tr>
			<td>row-</td>
			<td>tr</td>
			<td>.row-content</td>
		</tr>
		<tr>
			<td>text-</td>
			<td>em, small, span, strong, p</td>
			<td>.text-content</td>
		</tr>
		<tr>
			<td>title-</td>
			<td>h1, h2, h3, h4, h5, h6</td>
			<td>.title-content</td>
		</tr>
		<tr>
			<td>video-</td>
			<td>object, video</td>
			<td>.video-content</td>
		</tr>
		<tr>
			<td>wrapper-</td>
			<td>*</td>
			<td>.wrapper-content</td>
		</tr>
	</tbody>
</table>


Modifier classes
----------------

There is no limitation to extend your **type classes** with individual **state**, **size** and **position** modifier. Proper handling of **context** and **type** should prevent the need of adjoining classes.

Syntax: <code>.{type}-{state}</code> and <code>.{type}-{context}-{state}</code>

Syntax: <code>.{type}-{size}</code> and <code>.{type}-{context}-{size}</code>

Syntax: <code>.{type}-{position}</code> and <code>.{type}-{context}-{position}</code>

<table>
	<thead>
		<tr>
			<th>Suffix</th>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="3">State</td>
		</tr>
		<tr>
			<td>-active</td>
			<td>*</td>
			<td>.item-active</td>
		</tr>
		<tr>
			<td>-idle</td>
			<td>*</td>
			<td>.item-idle</td>
		</tr>
		<tr>
			<td>-hover</td>
			<td>*</td>
			<td>.item-hover</td>
		</tr>
		<tr>
			<td>-touch</td>
			<td>*</td>
			<td>.item-touch</td>
		</tr>
		<tr>
			<td colspan="3">Size</td>
		</tr>
		<tr>
			<td>-small</td>
			<td>*</td>
			<td>.item-small</td>
		</tr>
		<tr>
			<td>-medium</td>
			<td>*</td>
			<td>.item-medium</td>
		</tr>
		<tr>
			<td>-large</td>
			<td>*</td>
			<td>.item-large</td>
		</tr>
		<tr>
			<td colspan="3">Position</td>
		</tr>
		<tr>
			<td>-first</td>
			<td>*</td>
			<td>.item-first</td>
		</tr>
		<tr>
			<td>-second</td>
			<td>*</td>
			<td>.item-second</td>
		</tr>
		<tr>
			<td>-third</td>
			<td>*</td>
			<td>.item-third</td>
		</tr>
		<tr>
			<td>-last</td>
			<td>*</td>
			<td>.item-last</td>
		</tr>
		<tr>
			<td>-odd</td>
			<td>*</td>
			<td>.item-odd</td>
		</tr>
		<tr>
			<td>-even</td>
			<td>*</td>
			<td>.item-even</td>
		</tr>
	</tbody>
</table>


Functional classes
------------------

Functional classes using **pure CSS** are marked with the <code>is</code>, <code>no</code>, <code>has</code> and <code>fn</code> prefix. **Javascript enhanced** and therefore **re-usable** classes on the other hand can be identified by the <code>js</code> prefix. Each of them should never have styles for painting, use an additional **type** class for this purpose.

Syntax: <code>.is-{state}</code>, <code>.has-{context}</code>, <code>.no-{feature}</code> and <code>.fn-{action}</code>

Syntax: <code>.js-{action}</code> and <code>.js-{context}</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>is-</td>
			<td>*</td>
			<td>.is-active</td>
		</tr>
		<tr>
			<td>has-</td>
			<td>*</td>
			<td>.has-tooltip</td>
		</tr>
		<tr>
			<td>no-</td>
			<td>*</td>
			<td>.no-webgl</td>
		</tr>
		<tr>
			<td>fn-</td>
			<td>*</td>
			<td>.fn-clearfix</td>
		</tr>
		<tr>
			<td>js-</td>
			<td>*</td>
			<td>.js-click</td>
		</tr>
	</tbody>
</table>


Namespaces
----------

Consider to pick a unique namespace once you provide a framework to third party applications or generally want to prevent naming conflicts inside your project. Never mix up namespaces and follow the pretended naming of third party components.

Syntax: <code>.{namespace}-{type}</code> and <code>.{namespace}-{context}</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{namespace}-</td>
			<td>*</td>
			<td>.fb-main</td>
		</tr>
	</tbody>
</table>


Exceptions
----------

Syntax: <code>.wrapper-{type}</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tag</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wrapper-</td>
			<td>*</td>
			<td>.wrapper-body</td>
		</tr>
	</tbody>
</table>


Conclusion
----------

The goal of **NCSS** is to provide **semantic information** while reading CSS:

- What kind of elements, tags and sections are affected
- What is the relation and inheritance of one class to another
- Where is the most accurate place to add new declarations


Further reading
---------------

- [Bookmarklet](/docs/BOOKMARKLET.md)
- [Layout](/docs/LAYOUT.md)
- [Menu](/docs/MENU.md)
- [Variables](/docs/VARIABLES.md)