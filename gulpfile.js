const gulp = require("gulp");
const concat = require("gulp-concat");
const cssFiles = ["./src/scss/todo.scss"];
const jsFiles = ["./src/js/todo.js"];
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
const del = require("del");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

function styles() {
  return gulp
    .src(cssFiles)
    .pipe(sass({ errLogToConsole: true, outputStyle: "compressed" }))
    .on("error", console.error.bind(console))
    .pipe(concat("style.css"))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream());
}
function scripts() {
  return gulp
    .src(jsFiles)
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js/"))
    .pipe(browserSync.stream());
}
function clean() {
  return del(["build/*"]);
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/scss/**/*.scss", styles);
  gulp.watch("./src/js/**/*.js", scripts);
  gulp.watch("./*.html").on("change", browserSync.reload);
}

gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("del", clean);
gulp.task("watch", watch);
gulp.task("build", gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task("dev", gulp.series("build", "watch"));
