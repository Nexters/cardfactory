var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  apidoc = require('gulp-apidoc'),
  istanbul = require('gulp-istanbul'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  mocha = require('gulp-mocha');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function() {
  return gulp.src(['./config/**/*.js', './routes/**/*.js', './models/**/*.js', './db/**/*.js'])
    .pipe(jshint({}))
    .pipe(jshint.reporter(stylish));
});

gulp.task('pre-test', function () {
  return gulp.src(['./config/**/*.js', './routes/**/*.js', './models/**/*.js', './db/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function() {
  return gulp.src('./test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('apidoc', function(done){
  apidoc({
    src: "routes/",
    dest: "doc/",
    debug: true
  },done);
});

gulp.task('watch', function() {
  gulp.watch('public/javascripts/**/*.js', function(event) {
    return gulp.src('public/javascripts/**/*.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('./'));
  });
});