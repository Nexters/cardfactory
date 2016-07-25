var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  apidoc = require('gulp-apidoc'),
  istanbul = require('gulp-istanbul'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  mocha = require('gulp-mocha'),
  spawn = require('child_process').spawn;

var node;

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('server', function() {
  if (node) {
    node.kill();
  }
  node = spawn('node', ['bin/www'], {stdio: 'inherit'});
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('lint', function() {
  return gulp.src(['./config/**/*.js', './routes/**/*.js', './models/**/*.js', './db/**/*.js'])
    .pipe(jshint({}))
    .pipe(jshint.reporter(stylish));
});

gulp.task('coverage', function () {
  return gulp.src(['./config/**/*.js', './routes/**/*.js', './models/**/*.js', './db/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['coverage'], function() {
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

gulp.task('watch', ['server'], function() {
  gulp.watch('public/javascripts/**/*.js', function() {
    return gulp.src('public/javascripts/**/*.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('./'));
  });

  gulp.watch(['./config/**/*.js', './routes/**/*.js', './models/**/*.js', './db/**/*.js'], ['server']);
});