# Yeoman Gulp-Webapp with React and Browserify

This is a variation of [Yeoman's](http://yeoman.io) generated  [gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) with the inclusion of [Browserify](http://browserify.org) and [React](http://reactjs.com). I consider this more a recipe to gulp-webapp than a generator, as it doesn't significantly change gulp-webapp's features, such as SASS, LiveReload, etc., but rather easily allows for Browserify syntax.

## Steps to recreate
1. Install the standard gulp-webapp by calling `yo gulp-webapp` in your command line.
2. Install React via Bower: `bower install --save react`
3. Include the newly-downloaded React as a dependency in [index.html](app/index.html) (`<script src="/bower_components/react/react.js"></script>`)
4. Install NPM dependencies: `sudo npm install --save-dev browserify reactify vinyl-source-stream`
5. Change [gulpfile.js](gulpfile.js) to include custom `scripts()` task. Task `scripts()` is included in `serve()` and `html()`. Task `watch()` has been modified to watch `/.tmp` and [`scripts/`](scripts) for changes.
6. Add javascript class files to `/scripts` directory. Delete main.js (as the gulpfile's `scripts()` task will generate a main.js file). I chose *.js extensions only so that my text editor would recognize the files and color the text.
7. Add `<div id="app"></div>` to [index.html](app/index.html)


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
