# Yeoman Gulp-Webapp with React and Browserify

This is a variation of [Yeoman's](http://yeoman.io) generated  [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) with the inclusion of [Browserify](http://browserify.org) and [React](http://reactjs.com). I consider this more a recipe to gulp-webapp than a generator, as it doesn't significantly change gulp-webapp's features, such as SASS, LiveReload, etc., but rather easily allows for Browserify syntax.

## Steps to recreate
1. Install `yo gulp-webapp`
2. Install React via Bower: `bower install --save react`
3. Include newly-downloaded React as a dependency in [index.html](app/index.html) (`<script src="/bower_components/react/react.js"></script>`)
4. `sudo npm install --save-dev browserify reactify vinyl-source-stream`
5. Add javascript class files to `/scripts` directory.
6. Changed [gulpfile.js](gulpfile.js) to include custom `scripts()` task. Task `scripts()` is included in `serve()` and `html()`. Task `watch()` has been modified to watch `/.tmp` and [`scripts/`](scripts) for changes.
7. Add `<div id="app"></div>` to [index.html](app/index.html)


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
