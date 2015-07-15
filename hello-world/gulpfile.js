var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var watchplugin = require('gulp-watch');

var config = {
    HTML: 'src/index.html',
    JS_ENTRY_POINT: './src/js/main.js',
    JS_FILES: './src/js/**/*.js*',
    MINIFIED_OUT: 'app.min.js',
    OUT: 'app.js',
    DEST: './public',
};

gulp.task('js:build', function() {
    browserify(config.JS_ENTRY_POINT)
        .transform(reactify)
        .bundle()
        .pipe(source(config.OUT))
        .pipe(gulp.dest(config.DEST));
});

gulp.task('watch', function () {
    watchplugin(config.JS_FILES, function () {
        gulp.start('js:build');
    });
});

gulp.task('webserver', function () {
    connect.server({
        host: 'localhost',
        port: '9999',
        livereload: true
    })
});

gulp.task('default', ['js:build', 'watch', 'webserver']);
