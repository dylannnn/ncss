Examples
========

> A collection of HTML and CSS examples for the NCSS standard.


HTML
----

<pre>
&lt;header id="header" class="fb-header"&gt; 
	&lt;h1 class="fb-title-website"&gt;Website&lt;/h1&gt;
&lt;/header&gt;

&lt;main class="fb-main fb-wrapper"&gt;

	&lt;article id="content" class="fb-content"&gt;
		&lt;h2 class="fb-title fb-title-content"&gt;Headline&lt;/h2&gt;
		&lt;div class="fb-box fb-box-content"&gt;Content&lt;/div&gt;
	&lt;/article&gt;

	&lt;aside id="sidebar" class="fb-sidebar"&gt;
		&lt;h3 class="fb-title fb-title-sidebar"&gt;Headline&lt;/h3&gt;
		&lt;ul class="fb-list-sidebar"&gt;
			&lt;li&gt;Item&lt;/li&gt;
			&lt;li class="fb-js-active fb-item-active"&gt;Active item&lt;/li&gt;
			&lt;li&gt;Item&lt;/li&gt;
		&lt;/ul&gt;
	&lt;/aside&gt;

&lt;/main&gt;

&lt;footer id="footer" class="fb-footer"&gt;
	&lt;div class="fb-box fb-box-footer"&gt;Powered by NCSS&lt;/div&gt;
&lt;/footer&gt;
</pre>


CSS
---

<pre>
/**
 * @tableofcontents
 *
 * 1. layout
 * 2. boxes
 * 3. titles
 */

/* @section 1. layout */

.fb-content
{
	float: right;
	width: 80%;
}

.fb-sidebar
{
	float: left;
	width: 20%;
}

/* @section 2. boxes */

.fb-box
{
	box-sizing: border-box;
	padding: 1em;
}

/* @section 3. titles */

.fb-title
{
	font-size: 1em;
}

.fb-title-content
{
	color: #555;
}

.fb-title-sidebar
{
	color: #777;
}
</pre>