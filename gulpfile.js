var gulp = require('gulp');
var sacc = require('gulp-sass');
var browserSync = require('browser-sync');
gulp.task('sacc', function() {
    gulp.src('./src/css/*.scss')
    .pipe(sacc())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
    // .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('servers', function() {
    browserSync({
            server: {baseDir: ['src/']}
        }, function(err, bs) {
            console.log(bs.options.getIn(["urls", "local"]));
    });
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/css/*.scss', ['sacc']);
});

gulp.task('mainTask', ['html', 'sacc', 'servers']);