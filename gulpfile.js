// =======================================
// REQUIRED 
// =======================================

var gulp           = require('gulp'),
    uglify         = require('gulp-uglify'),
    rename         = require('gulp-rename'),
    plumber        = require('gulp-plumber'),
    browserSync    = require('browser-sync'),
    reload         = browserSync.reload,
    autoprefixer   = require('gulp-autoprefixer'),
    sourcemaps     = require('gulp-sourcemaps'),
    sass           = require('gulp-sass');

// =======================================
// SCRIPTS
// =======================================

// gulp.task('scripts', function(){
//   gulp.src(['js/**/*.js', '!js/**/*.min.js'])
      // .pipe(plumber())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(uglify())
//       .pipe(gulp.dest('js'))
     // .pipe(reload({stream: true}));

// });
// =======================================
// STYLES
// =======================================

gulp.task('styles', function(){
  gulp.src('scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'))
      .pipe(reload({stream: true}));

});

// =======================================
// HTML
// =======================================

gulp.task('html', function(){
  gulp.src('*.html')
      .pipe(reload({stream: true}));

});



// =======================================
// BROWSER-SYNC
// =======================================

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: './'
    }
  })
});



// =======================================
// WATCH 
// =======================================

gulp.task('watch', function(){
  // gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('*.html', ['html']);
});



// =======================================
// DEFAULT
// =======================================

// gulp.task('default', ['scripts', 'styles', 'watch']);
gulp.task('default', ['styles', 'html', 'browser-sync', 'watch']);
