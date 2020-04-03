
const gulp = require('gulp');
const sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

gulp.task('css', function () {
  const postcss = require('gulp-postcss')

  return gulp.src('app/assets/style/scss/main.scss')
    .pipe(postcss([
      require('tailwindcss'),
      require('autoprefixer'),
    ]))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/style/css'));
})

