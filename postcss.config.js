module.exports = {
  plugins: [
    require('precss')(),
    require('autoprefixer')(),
    require('postcss-simple-vars')(),
    require('postcss-nested')(),
    require('postcss-mixins')(),
    require('postcss-extend')(),
    require('postcss-conditionals')(),
    require('postcss-arithmetic')(),
    require('postcss-math')(),
    require('postcss-import')(),
  ],
};
