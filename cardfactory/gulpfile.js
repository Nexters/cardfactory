var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('watch', function() {
  gulp.watch('public/javascripts/**/*.js', function(event) {
    return gulp.src('public/javascripts/**/*.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('./'));
  });
});