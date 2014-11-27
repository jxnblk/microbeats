
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  gulp.src('./src/js/app.js')
    .pipe(browserify())
    .pipe(ngAnnotate())
    //.pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('add-track', require('./tasks/add-track'));

gulp.task('build', require('./tasks/build'));

gulp.task('default', ['css', 'js', 'build', 'serve'], function() {
  gulp.watch(['./src/**/*', './templates/**/*'], ['css', 'js', 'build']);
});

