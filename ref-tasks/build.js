
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

module.exports = function() {
  
  var options = {
    handlebars: Handlebars,
    partials: {
      application: fs.readFileSync('./views/layouts/application.hbs', 'utf8')
    },
    helpers: {
      date: require('../helpers/date'),
      icon: require('../helpers/icon')
    }
  };

  gulp.src('./views/**/*.hbs')
    .pipe(gulpHandlebars(model, options))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('.'));
};
