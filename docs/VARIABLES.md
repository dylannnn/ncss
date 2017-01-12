Variables
=========

> A variables guideline based on the latest CSS4 specification.


Colors
------

The color palette is a set of fixed hex values, use the `gray()` function over `--color-gray` variables.

```
:root
{
	--color-primary: #ff3300;
	--color-secondary: #6600ff;
	--color-tertiary: #cc0033;
}
```

Abstract color variables contain a **light** or **dark** suffix extention:

```
:root
{
	--color-primary-light: color(var(--color-primary) l(60%));
	--color-primary-dark: color(var(--color-primary) l(40%));
}
```


Gradients
---------

The gradient palette is based on the defined color variables:

```
:root
{
	--gradient-primary: linear-gradient(var(--color-primary), var(--color-primary-light));
	--gradient-secondary: linear-gradient(var(--color-secondary), var(--color-secondary-dark));
	--gradient-tertiary: linear-gradient(var(--color-tertiary-light), var(--color-tertiary-dark));
}
```

Abstract gradient variables contain a **light** or **dark** suffix extension:

```
:root
{
	--gradient-primary-light: linear-gradient(var(--color-primary), var(--color-primary) l(70%));
	--gradient-primary-dark: linear-gradient(var(--color-primary), var(--color-primary) l(30%));
}
```


Fonts
-----

```
:root
{
	--font-primary: arial, sans-serif;
	--font-code: monospace, arial, sans-serif;
	--font-icon: icon;
}
```


Queries
-------

```
@custom-media --media-small-max (max-width: 29.999em);
@custom-media --media-small-min (min-width: 30em);
@custom-media --media-medium-max (max-width: 49.999em);
@custom-media --media-medium-min (min-width: 50em);
@custom-media --media-large-max (max-width: 79.999em);
@custom-media --media-large-min (min-width: 80em);
@custom-media --media-retina (min-resolution: 192dpi);
```
