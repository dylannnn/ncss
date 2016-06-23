Variables
=========

> The variables naming conventions and best practices are based on the latest CSS4 specification.


Colors
------

The base palette should be a set of fixed hex values:

<pre>
:root
{
	--color-primary: #ff3300;
	--color-secondary: #6600ff;
	--color-tertiary: #cc0033;
}
</pre>

Abstract colors contain a **light** or **dark** suffix extention:

<pre>
:root
{
	--color-primary-light: color(var(--color-primary) l(60%));
	--color-primary-dark: color(var(--color-primary) l(40%));
}
</pre>


Gradients
---------

<pre>
:root
{
	--gradient-primary: linear-gradient(var(--rs-color-primary), var(--rs-color-primary-light));
	--gradient-secondary: linear-gradient(var(--rs-color-secondary), var(--rs-color-secondary-dark));
	--gradient-tertiary: linear-gradient(var(--rs-color-tertiary-light), var(--rs-color-tertiary-dark));
}
</pre>

Abstract gradients contain a **light** or **dark** suffix extention:

<pre>
:root
{
	--gradient-primary-light: linear-gradient(var(--rs-color-primary), var(--rs-color-primary) l(70%));
	--gradient-primary-dark: linear-gradient(var(--rs-color-primary), var(--rs-color-primary) l(30%));
}
</pre>


Fonts
-----

<pre>
:root
{
	--font-primary: arial, sans-serif;
	--font-code: monospace, sans-serif;
	--font-icon: 'icon';
}
</pre>


Queries
-------

<pre>
@custom-media --media-small-max screen and (max-width: 29.999em);
@custom-media --media-small-min screen and (min-width: 30em);
@custom-media --media-medium-max screen and (max-width: 49.999em);
@custom-media --media-medium-min screen and (min-width: 50em);
@custom-media --media-large-max screen and (max-width: 79.999em);
@custom-media --media-large-min screen and (min-width: 80em);
@custom-media --media-retina (min-resolution: 192dpi);
</pre>
