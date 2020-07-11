const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function compileSass(done) {
	gulp.src('./src/sass/main.scss')
		.pipe(sourcemap.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemap.write('.'))
		.pipe(gulp.dest('./src/css'))
	done();
}

function watcher(done) {
	browserSync.init({
		server: './src'
	})
	gulp.watch('./src/sass/**/*.scss',gulp.series(compileSass,reload));
	gulp.watch('./src/*.html',gulp.series(reload))
	done();
}

function reload(done) {
	browserSync.reload();
	done();
}

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass,watcher);