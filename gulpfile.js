var gulp = require('gulp'),
	jade = require('gulp-jade'),
	uglify = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	sass = require('gulp-sass'),
	browserify = require('gulp-browserify'),
	livereload = require('gulp-livereload');

var env = process.env.NODE_ENV || 'development';
var outputDir = 'builds/development';

gulp.task('jade', function(){
	return gulp.src('src/templates/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest(outputDir))
		.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify({ debug: env === 'development' }))
		.pipe(gulpif(env === 'production', uglify()))
		.pipe(gulp.dest(outputDir + '/js'))
		.pipe(livereload());
});

gulp.task('sass', function(){

	var config = {};

	if (env === 'development'){
		config.sourceComments = 'map';
	}

	if (env === 'production'){
		config.outputStyle = 'compressed';
	}

	return gulp.src('src/sass/**/*.scss')
		.pipe(sass(config))
		.pipe(gulp.dest(outputDir + '/css'))
		.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('src/templates/**/*.jade', ['jade']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js','jade','sass','watch']);