module.exports = {
  your_target: {
    options: {
      beautify: {
        "indent_size"     : 2,
        "indent_char"     : " ",
        "indent_with_tabs": false
      }
    },
    files  : [
      {
        data  : '<%= paths.src %>/data/default.yml',
        expand: true,
        cwd   : '<%= paths.src %>/',
        src   : ['**/*.twig', '!**/_*.twig', '!**/layouts/*.twig'], // Match twig templates but not partials
        dest  : '<%= paths.dist %>/',
        ext   : '.html'   // index.twig + datafile.json => index.html
      }
    ]
  }
};
