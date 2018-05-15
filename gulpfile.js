var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Start browserSync
gulp.task('browser-sync', function() {
	browserSync.init({
		server: './'
	});
});

// compile SCSS & reload browser
gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());
});


gulp.task('watch', function() {
	gulp.watch('./scss/*.scss', ['sass']);
});



// set defaults
gulp.task('default', ['browser-sync', 'sass', 'watch']);