var gulp = require('gulp');

var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        port: 3000,
        server: "./"
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('build:dev', ['serve']);
gulp.task('default', ['build:dev']);
