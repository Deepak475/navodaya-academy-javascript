const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass')(require('sass'));
// var browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

gulp.task('sass', function(){
  return gulp.src('app/scss/**/common.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(concat('application.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'))
});

gulp.task('sass:watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
});
