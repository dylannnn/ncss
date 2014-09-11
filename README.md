NCSS
====

> NCSS is a paper about naming conventions and best practices for **object oriented** and **atomic design** CSS.


Why
---

Massive CSS on **larger projects** used to cause issues:

- Teamwork without uniform conventions
- Missing context to the project's layout and structure
- Big ball of mud instead of modularization
- Lack of inline documentation


Getting started
---------------

There is no specification the use **hyphen**, **underscore** or **camelcase** for your classnames - it is upon your personal preference, but we recommended to use the language's native hyphen style.

Named Cascading Style Sheets are divided into:

- [Structural classes](#structural-classes)
- [Type classes](#type-classes)
- [Modifier classes](#modifier-classes)
- [Functional classes](#functional-classes)
- [Namespace classes](#namespace-classes)


Structural classes
------------------

Layout and structural classes provide a semantic context for underlaying elements. Classnames are **stand-alone** and should never contain a **prefix** or **suffix** extention.

Syntax: <code>.context</code>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Tags</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>.content</td>
			<td>article</td>
		</tr>
		<tr>
			<td>.footer</td>
			<td>footer</td>
		</tr>
		<tr>
			<td>.header</td>
			<td>header</td>
		</tr>
		<tr>
			<td>.navigation</td>
			<td>nav</td>
		</tr>
		<tr>
			<td>.section</td>
			<td>section</td>
		</tr>
		<tr>
			<td>.sidebar</td>
			<td>side</td>
		</tr>
		<tr>
			<td>.main</td>
			<td>div</td>
		</tr>
		<tr>
			<td>.wrapper</td>
			<td>div</td>
		</tr>
	</tbody>
</table>


Type classes
------------

Type classes are the foundation to write **re-usable**, **modular** and **semantic** CSS - tell the reader what kind of elements, tags and sections are affected. Keep in mind that structural tags are rather unsuitable to contain a **type** prefix.

Syntax: <code>.type</code> and <code>.type-context</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tags</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>box-</td>
			<td>blockquote, div</td>
			<td>.box-content</td>
		</tr>
		<tr>
			<td>button-</td>
			<td>a, button</td>
			<td>.button-content</td>
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
			<td>item-</td>
			<td>dd, dt, li</td>
			<td>.item-content</td>
		</tr>
		<tr>
			<td>label-</td>
			<td>label, legend</td>
			<td>.label-content</td>
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
			<td>set-</td>
			<td>div, fieldset</td>
			<td>.set-content</td>
		</tr>
		<tr>
			<td>table-</td>
			<td>table</td>
			<td>.table-content</td>
		</tr>
		<tr>
			<td>text-</td>
			<td>span, p</td>
			<td>.text-content</td>
		</tr>
		<tr>
			<td>title-</td>
			<td>h1, h2, h3, h4, h5, h6</td>
			<td>.title-content</td>
		</tr>
	</tbody>
</table>


Modifier classes
----------------

There are no limitation to extend your **type classes** with individual **state**, **description** and **position** modifier. Proper handling of **context** and **type** should prevent the need of adjoining classes.

Syntax: <code>.type-state</code> and <code>.type-context-state</code>

Syntax: <code>.type-description</code> and <code>.type-context-description</code>

Syntax: <code>.type-position</code> and <code>.type-context-position</code>

<table>
	<thead>
		<tr>
			<th>Suffix</th>
			<th>Tags</th>
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
			<td colspan="3">Description</td>
		</tr>
		<tr>
			<td>-small</td>
			<td>*</td>
			<td>.item-small</td>
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

Functional classes using **pure CSS** are marked with the <code>has</code> and <code>fn</code> prefix. **Javascript enhanced** and therefore **re-usable** classes on the other hand can be identified by the <code>js</code> prefix. Both should never have styles for painting, use an additional **type** class for this purpose.

Syntax: <code>.has-action</code> or <code>.fn-action</code>

Syntax: <code>.js-action</code> or <code>.js-context</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tags</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>has-</td>
			<td>*</td>
			<td>.has-tooltip</td>
		</tr>
		<tr>
			<td>fn-</td>
			<td>*</td>
			<td>.fn-more</td>
		</tr>
		<tr>
			<td>js-</td>
			<td>*</td>
			<td>.js-click</td>
		</tr>
	</tbody>
</table>


Namespace classes
-----------------

Consider to pick a unique namespace once you provide a framework to third party applications or generally want to prevent naming conflicts inside your project.

Syntax: <code>.namespace</code>

<table>
	<thead>
		<tr>
			<th>Prefix</th>
			<th>Tags</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>foo-</td>
			<td>*</td>
		</tr>
	</tbody>
</table>


Example
-------

A class <code>.foo-box-content</code> provides the information of a styled <code>div</code> tag located inside a structural <code>.foo-content</code> container. I picked the namespace <code>foo</code> from an conceived framework called foobar.


HTML:

<pre>
&lt;div class="foo-main foo-wrapper"&gt;

	&lt;div id="content" class="foo-content"&gt;
		&lt;h1 class="foo-title foo-title-content"&gt;Headline&lt;/h1&gt;
		&lt;div class="foo-box foo-box-content"&gt;Content&lt;/div&gt;
	&lt;/div&gt;

	&lt;div id="sidebar" class="foo-sidebar"&gt;
		&lt;h1 class="foo-title foo-title-sidebar"&gt;Headline&lt;/h1&gt;
		&lt;div class="foo-box foo-box-sidebar"&gt;
			&lt;ul class="foo-list-sidebar"&gt;
				&lt;li&gt;Item&lt;/li&gt;
				&lt;li class="foo-js-active foo-item-active"&gt;Active item&lt;/li&gt;
				&lt;li&gt;Item&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;
	&lt;/div&gt;

&lt;/div&gt;
</pre>

CSS:

<pre>
/**
 * @tableofcontents
 *
 * 1. boxes
 * 2. titles
 */

/* @section 1. boxes */

.foo-box
{
	box-sizing: border-box;
	padding: 1em;
}

.foo-box-content
{
	float: right;
	width: 80%;
}

.foo-box-sidebar
{
	float: left;
	width: 20%;
}

/* @section 2. titles */

.foo-title
{
	font-size: 1em;
}

.foo-title-content
{
	color: #555;
}

.foo-title-sidebar
{
	color: #777;
}
</pre>


Conclusion
----------

The goal of NCSS is to provide **semantic information** by reading other's people CSS.

- What kind of elements, tags and sections are affected
- What is the relation and inheritance of one class to another
- Where is the most accurate place to add new declarations
