// Inlines your CSS
module.exports = {
  your_target: {
    options: {
      preserveMediaQueries: true,
      applyAttributesTableElements: true,
      applyWidthAttributes: true,
      preserveImportant: true,
      preserveFontFaces: true,
      extraCss: '<%= extraCss %>',
      webResources: {
        relativeTo: 'dist/',
        images: false
      }
    },
    files: [{
      expand: true,
      src: ['<%= paths.dist %>/*.html'],
      dest: ''
    }, {
      expand: true,
      cwd   : '<%= paths.src %>/',
      src: ['*.twig', 'layouts/*.twig', 'partials/**/*.twig'],
      dest: '<%= paths.dist %>/twig/'
    }]
  }
};
