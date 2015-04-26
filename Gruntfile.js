module.exports = function( grunt ) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'dist/harrow.css': 'sass/harrow.scss'
        },
        options: {
          sourceComments: 'map',
          sourceMap: 'dist/harrow.css.map'
        }
      }
    },

    svgmin: {
      options: {
        plugins: [
          { removeViewBox:              false },
          { removeUselessStrokeAndFill: false }
        ]
      },
      dist: {
        files: [{
          expand:  true,
          cwd:     "assets/images/svg",
          src:     "**/*.svg",
          dest:    "assets/images/png"
        } ]
      }
    },

    respimg: {
      options: {
        widths:  [ 160, 320, 640, 1280, 2560 ],
        optimize: {
          input:  { svgo: 0, image_optim: 0, picopt: 0, imageOptim: 0 },
          output: { svgo: 0, image_optim: 0, picopt: 0, imageOptim: 0 }
        }
      },
      default: {
        files: [{
          expand: true,
          cwd: 'assets/images/src/',
          src: ['**/*'],
          dest: 'assets/images/'
        }]
      },
    },

    copy: {
      dist: {
        files: [
          { expand: true, src: 'sass/**/*', dest: 'dist/' },
          { expand: true, src: 'assets/**/*', dest: 'dist/' },
        ],
      },
      docs: {
        files: [
          { expand: true, src: 'dist/assets/**/*', dest: 'docs/assets/' }
        ]
      }
    },

    autoprefixer: {
      options: {
        browsers: [ 'last 2 version', 'ie 9' ]
      },
      dev: {
        src: 'dist/harrow.css',
        dest: 'dist/harrow.css'
      }
    },

    watch: {
      sass: {
        files: [ 'sass/**/*' ],
        tasks: [ 'build' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-respimg');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-svgmin');

  grunt.registerTask( 'develop', [
    'build',
    'watch'
  ]);

  grunt.registerTask( 'build', [
    'sass:dist',
    'svgmin',
    'respimg',
    'autoprefixer',
    'copy:dist',
    'copy:docs',
  ]);

  grunt.registerTask( 'default', [ 'develop'] );
};
