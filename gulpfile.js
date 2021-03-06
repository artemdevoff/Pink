var gulp = require("gulp");
var server = require("browser-sync").create();
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var minify = require("gulp-clean-css");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var run = require("run-sequence");
var del = require("del");

gulp.task("style", function () {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
  
    .pipe(server.reload({
      stream: true
    }));
});

gulp.task("serve", function () {
  server.init({
    server: "build",
    online: true
  });
  gulp.watch('build/**/*').on('change', server.reload);
  gulp.watch("less/**/*.less", ["style"]);
});



gulp.task("images", function () {
  return gulp.src("build/img/**/*.{png,jpg,gif,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.svgo({
        plugins: [
          {
            removeViewBox: false
          },
          {
            cleanupIDs: false
          }
        ]
      }),
      imagemin.jpegtran({
        progressive: true
      })
    ]))
    .pipe(gulp.dest("build/img"));
});
gulp.task("symbols", function () {
  return gulp.src("build/img/icons/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});



gulp.task("copy", function () {
  return gulp.src([
    "fonts/**",
    "img/**",
    "js/**",
    "*.html"
    ], {
      base: "."
    })
    .pipe(gulp.dest("build"));

});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", function (fn) {
  run(
    "style",
    fn
  );
});
