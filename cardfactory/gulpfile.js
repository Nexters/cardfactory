var gulp = require('gulp');
var webpack = require('webpack-stream');
var apidoc = require('gulp-apidoc');

gulp.task('default', function() {
  // place code for your default task here
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