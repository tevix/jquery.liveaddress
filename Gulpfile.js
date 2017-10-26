var gulp = require("gulp");
var config = {
	scss: {
		src: "./src/*.scss",
		dest: "./dist/css"
	}
};

gulp.task("dev", ["transpile-scss"]);

gulp.task("transpile-scss", function () {
	var sass = require("gulp-sass");
	return gulp.src(config.scss.src)
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(config.scss.dest));
});

gulp.task("minify-css", function () {
	return gulp;
});

gulp.task("minify-js", function () {
	return gulp;
});

// TODO: Create task to upload minified CSS.
// TODO: Create task to upload minified JS.
// TODO: Create cleanup task.
// TODO: Create publish task that wraps everything.