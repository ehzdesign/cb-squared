var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

// Image Task

gulp.task('image', function(){
  gulp.src('images/*')
      .pipe(imagemin({
        progressive: true
      }
      ))
      .pipe(gulp.dest('build/images'));
});