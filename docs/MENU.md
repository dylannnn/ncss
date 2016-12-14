Examples
========

> A simple menu example using the NCSS convention.


HTML
----

```
<input id="status-menu" class="rs-fn-status-menu" type="checkbox">

<div class="rs-has-menu">

	<label class="rs-fn-toggle-menu rs-label-toggle-menu" for="status-menu">Menu</label>
	<label class="rs-fn-close-menu rs-label-close-menu" for="status-menu"></label>
    
	<ul class="rs-fn-menu rs-list-menu">
		<li></li>
		<li></li>
		<li></li>
	</ul>

</div>
```


CSS
---

```
/**
 * @tableofcontents
 *
 * 1. logic
 */

/* @section 1. logic */

.rs-fn-status-menu,
.rs-fn-status-menu:not(:checked) + .rs-has-menu .rs-fn-menu,
.rs-fn-status-menu:not(:checked) + .rs-has-menu .rs-fn-close-menu
{
	display: none;
}
```