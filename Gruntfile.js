module.exports = function (grunt) {
    grunt.initConfig({
        less: {

            development: {
                options: {
                    paths: ["less/"], //@import from
                    compress: true
                },
                files: {
                    "./css/style.min.css": "./web/less/style.less"
                }
            },
            //            production: {
            //                options: {
            //                    paths: ["less/"],
            //                    compress: true
            //                },
            //                files: {
            //                    "css/style.css": "./web/less/style.less"
            //                }
            //            }
        },


        concat: {
            options: {
                separator: ';'
            },
            css_concat: {
                src: [],
                dest: ''
            },
            js_concat: {
                src: [],
                dest: ''
            }
        },

        uglify: {
            options: {
                mangle: false,
                preserveComments: false
            },
            custom_js: {
                files: {
                    './js/script.min.js': './js/scripts.js'
                }
            }
        },

        watch: {
            less_files: {
                files: ['./web/less/*.less'],
                tasks: ['less']
            },
            custom_js_files: {
                files: ['./js/scripts.js'],
                tasks: ['uglify:custom_js']
            },
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['less','uglify']
            }


        }

    }); //grunt config ends. init tasks here.

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('init', ['less', 'uglify']);

    grunt.registerTask('default', ['watch']);
};
