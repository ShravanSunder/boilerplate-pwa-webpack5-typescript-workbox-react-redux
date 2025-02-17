// Configure purgecss plugin
const purgecss = require('@fullhuman/postcss-purgecss')({
   // Specify the paths to all of the template files in your project
   content: [
      './public/**/*.html',
      './src/**/*.tsx',
      './src/**/*.ts',
      './src/**/*.jsx',
      './src/index.html',
      // etc.
   ],

   // // This is the function used to extract class names from your templates
   // defaultExtractor: (content) => {
   //    // Capture as liberally as possible, including things like `h-(screen-1.5)`
   //    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

   //    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
   //    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

   //    return broadMatches.concat(innerMatches);
   // },
});

// // Export all plugins our postcss should use
// module.exports = {
//    plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')], //, ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
// };

module.exports = {
   plugins: [require('tailwindcss'), require('autoprefixer')],
};
