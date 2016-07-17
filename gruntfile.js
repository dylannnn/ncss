module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		jshint:
		{
			dependency:
			{
				src:
				[
					'gruntfile.js'
				]
			},
			ncss:
			{
				src:
				[
					'assets/scripts/setup.js',
					'assets/scripts/validator.js'
				]
			},
			options:
			{
				jshintrc: '.jshintrc'
			}
		},
		jsonlint:
		{
			dependency:
			{
				src:
				[
					'composer.json',
					'package.json'
				]
			}
		},
		uglify:
		{
			ncss:
			{
				src:
				[
					'assets/scripts/setup.js',
					'assets/scripts/validator.js'
				],
				dest: 'dist/scripts/ncss.min.js'
			}
		},
		bookmarklet_wrapper:
		{
			ncss:
			{
				src:
				[
					'dist/scripts/ncss.min.js'
				],
				dest: 'dist/scripts/bookmarklet.js'
			}
		},
		shell:
		{
			toc:
			{
				command: 'sh vendor/bin/tocgen.sh assets/scripts .tocgen'
			},
			options:
			{
				stdout: true
			}
		}
	});

	/* load tasks */

	grunt.loadNpmTasks('grunt-bookmarklet-wrapper');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-shell');

	/* register tasks */

	grunt.registerTask('default',
	[
		'jshint',
		'jsonlint'
	]);
	grunt.registerTask('toc',
	[
		'shell:toc'
	]);
	grunt.registerTask('build',
	[
		'uglify',
		'bookmarklet_wrapper'
	]);
};
