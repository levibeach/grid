var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

gulp.task('serve', [], function() {
  browserSync.init({
    server: {
      baseDir: ""
    }
  });
  gulp.watch(["**/*.scss"], ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass()
      .on('error', function (err) {
        sass.logError(err);
        this.emit('end');
      })
    )
    .pipe(autoprefixer(['last 2 versions', '> 5%'], { cascade: true }))
    .pipe(cssmin())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
