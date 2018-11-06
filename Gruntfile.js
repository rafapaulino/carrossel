/*global module:false*/
module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        cssmin: {
			target: {
				files: {
					'css/carrossel.min.css': [
						'css/carrossel.css'
					]
				}
			}
        },
        uglify: {
            target: {
                files: {
                    'js/carrossel.min.js': [
                        'js/carrossel.js'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['cssmin','uglify']);

};
