Variables
=========

> This guide is based on the CSS4 standard by W3C.


Colors
------

The base color palette should be a set of fixed hex values:

<pre>
:root
{
	--rs-color-primary: #ff3300;
	--rs-color-secondary: #6600ff;
	--rs-color-tertiary: #cc0033;
}
</pre>


Gradients
---------


Fonts
-----


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
