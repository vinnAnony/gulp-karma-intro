// const gulp  = require('gulp'),
//     gutil = require('gulp-util'),
//     uglify = require('gulp-uglify'),
//     sass = require('gulp-sass')(require('sass'));
//
// const {series,parallel,watch,src,dest} = require('gulp');
//
// // create a task and log a message
// gulp.task('example', function(done) {
//     done();
//     return gutil.log('Gulp is running!')
// });
//
// gulp.task('minify', (done) => {
//     gulp.src('src/js/**/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('public/assets/js'));
//     done();
// });
//
// function example(done){
//     done();
//     return gutil.log('Gulp is running!')
// }
//
// function minify(done){
//     src('src/js/**/*.js')
//         .pipe(uglify())
//         .pipe(dest('public/assets/js'));
//     done();
// }
//
// function fail(fail){
//     new Error("Fail test error");
//     fail();
// }
//
// function watchJs(watchMe){
//     watch("src/js/**/*.js",minify);
//     watchMe();
// }
//
// function sassify(sassy) {
//     src("src/scss/*.scss")
//         .pipe(sass())
//         .pipe(dest("public/assets/css"));
//     sassy();
// }
//
// //exports.default = series(example,minify);
// //exports.default = series(example,fail,minify);
// //exports.default = parallel(example,fail,minify);
// //exports.default = watchJs
// //exports.watch = watchJs
// exports.sassify = sassify