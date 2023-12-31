// Importamos los módulos necesarios
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

// Importamos gulp-imagemin de forma asíncrona
let imagemin;
const imageminPromise = import('gulp-imagemin').then(im => {
  imagemin = im.default;
});

// Tarea para procesar los archivos CSS
function css() {
  return gulp.src('src/css/*.css') // seleccionamos los archivos fuente
    .pipe(sourcemaps.init()) // inicializamos los sourcemaps
    .pipe(concat('styles.css')) // concatenamos los archivos en uno solo
    .pipe(cleanCSS()) // minificamos el CSS
    .pipe(sourcemaps.write()) // escribimos los sourcemaps
    .pipe(gulp.dest('dist/css')) // escribimos el archivo resultante en dist/css
    .pipe(browserSync.stream()); // recargamos el navegador
}

// Tarea para procesar los archivos SCSS
function sassTask() {
  return gulp.src('src/scss/*.scss') // seleccionamos los archivos fuente
    .pipe(sourcemaps.init()) // inicializamos los sourcemaps
    .pipe(sass().on('error', sass.logError)) // compilamos el SCSS a CSS
    .pipe(sourcemaps.write()) // escribimos los sourcemaps
    .pipe(gulp.dest('dist/css')); // escribimos el archivo resultante en dist/css
}

// Tarea para procesar los archivos JavaScript
function js() {
  return gulp.src('src/js/*.js') // seleccionamos los archivos fuente
    .pipe(sourcemaps.init()) // inicializamos los sourcemaps
    .pipe(concat('scripts.js')) // concatenamos los archivos en uno solo
    .pipe(uglify()) // minificamos el JavaScript
    .pipe(sourcemaps.write()) // escribimos los sourcemaps
    .pipe(gulp.dest('dist/js')) // escribimos el archivo resultante en dist/js
    .pipe(browserSync.stream()); // recargamos el navegador
}

// Tarea para optimizar las imágenes
async function img() {
  await imageminPromise; // esperamos a que gulp-imagemin se haya importado
  if (!imagemin) {
    throw new Error('gulp-imagemin not loaded');
  }
  return gulp.src('src/images/*') // seleccionamos los archivos fuente
    .pipe(imagemin()) // optimizamos las imágenes
    .pipe(gulp.dest('dist/images')); // escribimos los archivos resultantes en dist/images
}

// Tarea para observar los cambios en los archivos y ejecutar las tareas correspondientes
function watch() {
  browserSync.init({ // inicializamos BrowserSync
    server: {
      baseDir: './' // servimos los archivos desde la raíz del proyecto
    }
  });
  gulp.watch('src/css/*.css', css); // observamos los cambios en los archivos CSS
  gulp.watch('src/scss/*.scss', sassTask); // observamos los cambios en los archivos SCSS
  gulp.watch('src/js/*.js', js); // observamos los cambios en los archivos JavaScript
  gulp.watch('src/images/*', img); // observamos los cambios en las imágenes
  gulp.watch('./*.html').on('change', browserSync.reload); // recargamos el navegador cuando cambia un archivo HTML
}

// Exportamos las tareas para que puedan ser ejecutadas desde la línea de comandos
exports.css = css;
exports.sass = sassTask;
exports.js = js;
exports.img = img;
exports.watch = watch;