module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        'gh-pages': {
            options: {
                base: '_site'
            },
            src: ['**']
        }

    });

    grunt.registerTask('default', 'gh-pages');
};
