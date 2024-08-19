var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

function defaultTask(cb) {
  return gulp.src("./index.js")
    .pipe(uglify())
    .pipe(concat("ugly.js"))
    .pipe(gulp.dest("./"));
}

exports.default = defaultTask;
