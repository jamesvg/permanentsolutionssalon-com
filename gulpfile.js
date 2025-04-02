var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function(){
  return gulp.src('./less/agency.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['css'], function () {
    gulp.watch('less/*.less', false, ['css']);
});
