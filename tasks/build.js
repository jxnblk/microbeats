
var fs = require('fs');
var gulp = require('gulp');
var Handlebars = require('handlebars');
var delimiters = require('handlebars-delimiters');
var layouts = require('handlebars-layouts');
var gulpHandlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var model = require('../model');

layouts(Handlebars);
// Doesn't work with layouts ??
//delimiters(Handlebars, ['<%=', '%>']);

var options = {
  handlebars: Handlebars,
  partials: {
    application: fs.readFileSync('./templates/layouts/application.hbs', 'utf8')
  },
  helpers: {
    date: require('../helpers/date')
  }
};

module.exports = function() {
  gulp.src('./templates/**/*.hbs')
    .pipe(gulpHandlebars(model, options))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'));
};

