Examples
========

> A layout example using the NCSS convention.


HTML
----

```
<header id="header" class="fb-header"> 
	<h1 class="fb-title-website">Website</h1>
</header>

<main class="fb-main fb-wrapper">

	<article id="content" class="fb-content">
		<h2 class="fb-title-content">Headline</h2>
		<div class="fb-box-content">Box</div>
	</article>

	<aside id="sidebar" class="fb-sidebar">
		<h3 class="fb-title-sidebar">Headline</h3>
		<p class="fb-text-sidebar">Text</p>
	</aside>

</main>

<footer id="footer" class="fb-footer">
	<div class="fb-box-footer">Powered by NCSS</div>
</footer>
```


CSS
---

```
/**
 * @tableofcontents
 *
 * 1. layout
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
```
