module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Concaténation
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/jquery.js', 'js/plugins.js'],
                dest: 'js/app.js'
            }
        },
        // Minification JS
        uglify: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/jquery.js', 'js/plugins.js'],
                dest: 'js/app.min.js'
            }
        }

    });

//  Je charge ma tâche concat
    grunt.loadNpmTasks('grunt-contrib-concat');

//  Je charge ma tâche uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');

// J'assigne ma tâche à la commande par défaut de Grunt
    grunt.registerTask('default', ['concat:dist']);



};