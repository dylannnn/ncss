NCSS
====

> NCSS is a paper about naming conventions and best practices for **object oriented** and **atomic design** powered CSS.


Why
---

Massive CSS on large scaled websites used to cause following issues:

- Multiple editors without a uniform concept
- Missing context to the website's layout and HTML structure
- Lack of inline documentation


Getting started
---------------

Named Cascading Style Sheets are divided into:

- [Namespace classes](#namespace-classes)
- [Structural classes](#structural-classes)
- [Type classes](#type-classes)
- [Modifier classes](#modifier-classes)
- [Functional classes](#functional-classes)

There is no specification the use **hyphen**, **underscore** or **camelcase** for class names!


Namespace classes
-----------------

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

<strong>Hint:</strong>

Consider to pick a namespace if you provide your CSS to a third party application.


Structural classes
------------------

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
			<td>article, div</td>
		</tr>
		<tr>
			<td>.footer</td>
			<td>div, footer</td>
		</tr>
		<tr>
			<td>.header</td>
			<td>div, header</td>
		</tr>
		<tr>
			<td>.navigation</td>
			<td>div, nav</td>
		</tr>
		<tr>
			<td>.section</td>
			<td>div, section</td>
		</tr>
		<tr>
			<td>.sidebar</td>
			<td>div, aside</td>
		</tr>
		<tr>
			<td>.wrapper</td>
			<td>div</td>
		</tr>
	</tbody>
</table>

<strong>Hint:</strong>

Layout and structural classes should never contain a type prefix or modifier suffix.


Type classes
------------

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
			<td>blockquote, div, span</td>
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

<strong>Hint:</strong>

Structural tags are rather unsuitable to contain a type prefix:

- article
- aside
- footer
- header
- nav
- section


Modifier classes
----------------

Extend with additional description:

Syntax: <code>.type-description</code> and <code>.type-context-description</code>

Extend with current state:

Syntax: <code>.type-state</code> and <code>.type-context-state</code>

Extend with position information:

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
			<td colspan="3">Additional description</td>
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
			<td colspan="3">Current state</td>
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
			<td colspan="3">Position information</td>
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

<strong>Hint:</strong>

Proper handling of type and context should prevent the need of adjoining classes.


Functional classes
------------------

Pure functional classes, marked with the <code>has</code> prefix.

Syntax: <code>.has-action</code> or <code>.has-context</code>

Javascript related classes marked with the <code>js</code> prefix.

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
			<td>js-</td>
			<td>*</td>
			<td>.js-click</td>
		</tr>
	</tbody>
</table>

<strong>Hint:</strong>

Functional classes should never have declarations for styling.


Example
-------

A class <code>.foo-box-content</code> provides the information of a styled <code>div</code> tag located inside a structural <code>.foo-content</code> container. I picked a namespace <code>foo</code> from the foobar framework.


HTML:

<pre>
&lt;div class="foo-wrapper"&gt;

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
/* boxes */

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

/* titles */

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

The goal of NCSS is to provide **additional information** by reading unknown CSS declaration.

- What elements, tags and sections are affected
- What is the relation of one CSS class to another
- Where to add related CSS declarations


Thanks
------

[Ronny Springer](https://github.com/ronny-springer) for contribution
