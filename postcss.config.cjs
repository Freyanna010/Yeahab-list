module.exports = {
  plugins: [
    require('autoprefixer'), // Добавление автопрефиксов
    require('cssnano'), // Минимизация CSS
    require('postcss-preset-env'),
    require('postcss-import'),
  ],
};
