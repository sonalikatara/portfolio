module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 300,
            
            suffix: '_sm'
           }, 
          {
            
            width: 320,
            
            suffix: '_md'
                      
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/features/',
          dest: 'images/features/'
        }]
      },
       header: {
        options: {
          engine: 'im',
          sizes: [{
            width: 488,
            
            suffix: '_sm'
           }
          ]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/header/',
          dest: 'images/header/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/fixed directory */
    copy: {
      dev: {
        files: [{
          expand: true,
           src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/fixed/',
          dest: 'images/fixed/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};

