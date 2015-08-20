var gulp = require('gulp'),
	jade = require('gulp-jade'),
	uglify = require('gulp-uglify'),
	gulpif = require('gulp-if'),
	sass = require('gulp-sass'),
	browserify = require('gulp-browserify'),
	jslint = require('gulp-jslint'),
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

gulp.task('default', ['js','jade','sass','watch','jslint']);

// Testing

// build the main source into the min file 
gulp.task('jslint', function () {
    return gulp.src(['src/js/main.js'])
 
        // pass your directives 
        // as an object 
        .pipe(jslint({
            // these directives can 
            // be found in the official 
            // JSLint documentation. 
            node: true,
            evil: true,
            nomen: true,
 
            // you can also set global 
            // declarations for all source 
            // files like so: 
            global: [],
            predef: [],
            // both ways will achieve the 
            // same result; predef will be 
            // given priority because it is 
            // promoted by JSLint 
 
            // pass in your prefered 
            // reporter like so: 
            reporter: 'default',
            // ^ there's no need to tell gulp-jslint 
            // to use the default reporter. If there is 
            // no reporter specified, gulp-jslint will use 
            // its own. 
 
            // specifiy custom jslint edition 
            // by default, the latest edition will 
            // be used 
            edition: '2014-07-08',
 
            // specify whether or not 
            // to show 'PASS' messages 
            // for built-in reporter 
            errorsOnly: false
        }))
 
        // error handling: 
        // to handle on error, simply 
        // bind yourself to the error event 
        // of the stream, and use the only 
        // argument as the error object 
        // (error instanceof Error) 
        .on('error', function (error) {
            console.error(String(error));
        });
});