var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browserSync').create();

// compile SCSS & reload browser
gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload{stream:true});
});


gulp.task('watch', function() {
	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch('.**/*.html').on('change', browserSync.reload);
});

gulp.task('serve', function() {

	browserSync.init( {
		server: {
			baseDir: './'
		}
	});
});

// set defaults
gulp.task('default', ['sass', 'watch', 'serve']);