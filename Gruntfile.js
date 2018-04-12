module.exports = function (grunt) {

  var css = grunt.file.read('src/css/main.css');

  require('load-grunt-config')(grunt, {

    // Pass data to tasks
    data          : {

      // Re-usable filesystem path variables
      paths: {
        src     : 'src',
        src_img : 'src/img',
        dist    : 'dist',
        dist_img: 'dist/img',
        preview : 'preview'
      },

      extraCss: css,

      // secrets.json is ignored in git because it contains sensitive data
      // See the README for configuration settings
      secrets: grunt.file.readJSON('secrets.json')

    },
    loadGruntTasks: {
      pattern: 'grunt-*',
      config : require('./package.json'),
      scope  : 'devDependencies'
    },
  });
};