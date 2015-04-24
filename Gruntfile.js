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

    copy: {
      dist: {
        files: [
          { expand: true, src: 'sass/**/*', dest: 'dist/' }
        ]
      },
      images: {
        files: [
          { expand: true, src: 'assets/images/**', dest: 'dist/' }
        ]
      },
      docs: {
        files: [
          { expand: true, src: 'dist/**/*', dest: 'docs/' }
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

    grunticon: {
        myIcons: {
            files: [{
                expand: true,
                cwd: 'assets/icons',
                src: ['*.svg', '*.png'],
                dest: "dist/assets/icons"
            }],
            options: {
              previewTemplate: './assets/icons/_preview-template.hbs',
              colors: {
                graydarker: '#333',
                graydark: '#666',
                gray: '#999',
                graylight: '#ccc',
                graylighter: '#f2f2f2',
                primary: '#00c5e5',
                success: '#56d980',
                info: '#3eccc4',
                danger: '#fc8b8b',
                white: '#fff'
              }
            }
        }
    },

    watch: {
      // Watch and compile sass files, but don't reload here
      sass: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: [ 'sass:dist', 'autoprefixer', 'copy:dist', 'copy:docs' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-grunticon');

  // Local development with watch and js checkers
  grunt.registerTask( 'develop', [
    'build',
    'watch'
  ]);
  // Local development without js checkers and watch task
  grunt.registerTask( 'build', [
    'grunticon',
    'sass:dist',
    'autoprefixer',
    'copy:dist',
    'copy:docs',
    'copy:images',
  ]);
  // Less typing
  grunt.registerTask( 'default', [ 'develop'] );
};
