NCSS
====

> NCSS is a draft paper about CSS naming conventions and best practices.


Why
---

Massive CSS on large scaled websites used to cause problems like:

- Multiple editors without a uniform concept
- Missing context to the website's structure and layout
- Lack of inline documentation


Howto
-----

A class name <code>.box&#95;content</code> provides the information of a styled <code>div</code> tag located inside a parent <code>.content</code> container.

Layout and structural class names should never contain a type prefix or description suffix.

<strong>Correct:</strong>

<code>.type&#95;context</code> or more specified <code>.type&#95;context&#95;description</code>

<strong>Wrong:</strong>

<code>.context&#95;class .unspecified&#95;class</code> or over specified <code>.type&#95;context&#95;description&#95;name</code>

<strong>Exception:</strong>

Please use IDs for Javascript. If you have to use CSS classes instead, mark it with a <code>js</code> prefix.

<code>.js&#95;action</code> or <code>.js&#95;context</code>

Pure CSS functional classes should marked with the <code>has</code> prefix.

<code>.has&#95;action</code> or <code>.has&#95;context</code>

<code>.js</code> and <code>.has</code> classes should never have CSS declarations.

Layout
-----

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
			<td>footer, div</td>
		</tr>
		<tr>
			<td>.header</td>
			<td>header, div</td>
		</tr>
		<tr>
			<td>.wrapper</td>
			<td>div</td>
		</tr>
	</tbody>
</table>


Types
-----

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
			<td>.box</td>
			<td>blockquote, div</td>
			<td>.box_content</td>
		</tr>
		<tr>
			<td>.field</td>
			<td>button, input, select</td>
			<td>.field_input</td>
		</tr>
		<tr>
			<td>.form</td>
			<td>form</td>
			<td>.form_contact</td>
		</tr>
		<tr>
			<td>.item</td>
			<td>dd, dt, li</td>
			<td>.item_active</td>
		</tr>
		<tr>
			<td>.link</td>
			<td>a</td>
			<td>.link_action</td>
		</tr>
		<tr>
			<td>.list</td>
			<td>dl, ol, ul</td>
			<td>.list_navigation</td>
		</tr>
		<tr>
			<td>.set</td>
			<td>fieldset</td>
			<td>.set_login</td>
		</tr>
		<tr>
			<td>.table</td>
			<td>table</td>
			<td>.table_result</td>
		</tr>
		<tr>
			<td>.text</td>
			<td>span, p</td>
			<td>.text_about</td>
		</tr>
		<tr>
			<td>.title</td>
			<td>h1, h2, h3, h4, h5, h6</td>
			<td>.title_content</td>
		</tr>
		<tr>
			<td colspan="3">&nbsp;</td>
		</tr>
		<tr>
			<td>.has</td>
			<td>*</td>
			<td>.has_tooltip</td>
		</tr>
		<tr>
			<td>.js</td>
			<td>*</td>
			<td>.js_click</td>
		</tr>
	</tbody>
</table>

<strong>Important:</strong>

Structural tags are rather unsuitable to contain a type prefix:

- article
- aside
- footer
- header
- nav
- section


Example
-------

HTML:

<pre>
&lt;div class="wrapper"&gt;

	&lt;div id="content" class="content"&gt;
		&lt;h1 class="title_content"&gt;Headline&lt;/h1&gt;
		&lt;div class="box_content"&gt;Content&lt;/div&gt;
	&lt;/div&gt;

	&lt;div id="sidebar" class="sidebar"&gt;
		&lt;h1 class="title_sidebar"&gt;Headline&lt;/h1&gt;
		&lt;div class="box_sidebar"&gt;
			&lt;ul class="list_sidebar"&gt;
				&lt;li&gt;Item&lt;/li&gt;
				&lt;li class="item_active"&gt;Active item&lt;/li&gt;
				&lt;li&gt;Item&lt;/li&gt;
			&lt;/ul&gt;
		&lt;/div&gt;
	&lt;/div&gt;

&lt;/div&gt;
</pre>

CSS:

<pre>
/* boxes */

.box_content
{
	padding: 1em;
}

.box_sidebar
{
	padding: 0.5em;
}

/* titles */

.title_content
{
	color: #555;
}

.title_sidebar
{
	color: #777;
}
</pre>