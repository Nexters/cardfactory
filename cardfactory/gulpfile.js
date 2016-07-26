var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  apidoc = require('gulp-apidoc'),
  istanbul = require('gulp-istanbul'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  mocha = require('gulp-mocha'),
  uglify = require('gulp-uglify'),
  minifyCss = require('gulp-minify-css'),
  spawn = require('child_process').spawn;

var node;
var serverJsFiles = ['./config/**/*.js', './routes/**/*.js', './models/**/*.js', './db/**/*.js'];
var clientJsFiles = ['public/javascripts/**/*.js'];
var cssFiles = ['public/stylesheets/**/*.css'];
var apidocConf = {
  src: 'routes/',
  dest: 'doc/',
  debug: true,
  config: './'
};

gulp.task('uglify-js', function () {
  return gulp.src(clientJsFiles)
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('minify-css', function () {
  return gulp.src(cssFiles)
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
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
  return gulp.src(serverJsFiles)
    .pipe(jshint({}))
    .pipe(jshint.reporter(stylish));
});

gulp.task('coverage', function () {
  return gulp.src(serverJsFiles)
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['lint', 'coverage'], function() {
  return gulp.src('./test/**/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('apidoc', function(done){
  apidoc(apidocConf, done);
});

gulp.task('watch', ['server'], function() {
  gulp.watch(clientJsFiles, function() {
    return gulp.src(clientJsFiles)
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('./'));
  });

  gulp.watch(cssFiles, function() {
    return gulp.src(cssFiles)
      .pipe(minifyCss())
      .pipe(gulp.dest('./dist/css'));
  });

  gulp.watch(serverJsFiles, ['server']);
});


gulp.task('default', ['uglify-js', 'minify-css', 'apidoc']);
