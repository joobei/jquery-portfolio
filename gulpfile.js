// Include gulp
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

// Uglify js
gulp.task('scripts', function() {
    return gulp.src('demo/*.js')
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('dist'));
});

// Minify css
gulp.task('styles', function() {
    return gulp.src('demo/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default',
    [
        'scripts',
        'styles',
    ]);
