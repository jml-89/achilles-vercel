var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

function defaultTask(cb) {
  return gulp.src("./clean.js")
    .pipe(uglify())
    .pipe(concat("index.js"))
    .pipe(gulp.dest("./"));
}

exports.default = defaultTask;
