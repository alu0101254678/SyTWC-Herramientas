# Tecnologías Web: Cliente

## Herramientas de desarrollo en el lado del Cliente

- VS Code - Live Server
- Navegador
- Gestión de paquetes: *npm*, *brower*
- Control de versiones: *Git*
- Generación del proyecto:  *Yeoman*
- Automatización de tareas *Gulp*, *Grunt*

## Actividades

### Gulp

Realizar un proyecto web de prueba para experimentar con las herramientas que se han visto. El proyecto debe incluir un fichero index.html, 2 ficheros css, un fichero sass, 2 ficheros de scripts .js y utilizar 2 imágenes.
Crear un repositorio para la práctica. Tener en cuenta los ficheros que deben ser ignorados.
Crear la estructura del proyecto de forma automática.
Crear un fichero de automatización de tareas en el que se prueben lo que se ha explicado:

- Concatenar los dos ficheros css
- Minificar css,
- Hacer sourcesmaps del css
- Lance BrowserSync
- Investigar sobre paquetes para minificar imágenes y js. Automatizarlo.
  
### Yeoman

Crear un proyecto generado como una aplicación web básica con Yeoman.

### Parcel

Crear un proyecto que cumpla los mismos requisitos que la actividad 1, pero utilizando la herramienta [Parcel](

## Códigos de ejemplo

### Yeoman Tools

`npm install -g yo //instalar yeoman`
`npm install -g generator-webapp       // Instalar el generador`  
`mkdir /home/tuUsuario/nuevoProyecto  // Crear la carpeta del proyecto`  
`cd /home/tuUsuario/nuevoProyecto      // Entrar en la carpeta proyecto`  
`yo webapp`

### Gulp Tools

```javascript
var gulp = require('gulp');
var concatCss = require('gulp-concat-css'); //paquete a utilizar

gulp.task(“default”, function() { //tarea por defecto
gulp.src('./src/html/*.*').pipe(gulp.dest('dist'));
gulp.src('./src/css/*.*').pipe(concatCss("super.css")).pipe(gulp.dest('dist'));
gulp.src("./src/js/*.*").pipe(gulp.dest("dist"));
});
```

#### Minify Css

`npm install --save-dev gulp-minify-css`
`var gulp = require('gulp');`  
`var browserSync = require('browser-sync').create();`  
`var minifyCss = require('gulp-minify-css);`  

`gulp.task('styles', function(){`  
`gulp.src(['src/styles/**/*.css'])`  
`.pipe(minifyCss())`  
`.pipe(gulp.dest.('dist/styles'))`  
`.pipe(browserSync.stream());`  
`});`  
`gulp.task('default', function(){`  
`browserSync.init({`  
`server:'./'});`  
`gulp.watch('*.html', browserSync.reload);`  
`});`

## Instalar parcel

`npm install parcel-bundler -g`
Puedes utilizar la herramienta: [CreateApp](https://createapp.dev/) como generador del proyecto.

## Parcel en github-pages

/repo-name/ debe ser reemplazado por el nombre del repositorio. Se debe tener instalado en el proyecto ```gh-pages```

```javascript
{
  "scripts": {
    "start": "parcel serve -d dist src/index.html",
    "build": "parcel build -d build --public-url /repo-name/ src/index.html",
    "deploy": "gh-pages -d build"
  }
}
```

## Directorio Gulp

1. Crear la estructura básica del proyecto
2. Crear el fichero package.json
3. Instalar gulp de forma global y local(comandos: npm install -g gulp-cli, npm install --save-dev gulp)
4. Crear el fichero gulpfile.js y rellenarlo con las tareas que deseamos automatizar.
5. Instalar los paquetes en forma de desarrollo necesarios para la actividad (paquetes: gulp-concat-css, gulp-minify-css, gulp-sourcemaps, gulp-imagemin, gulp-uglify, gulp-babel, gulp-sass, gulp-sass-glob, gulp-sass-lint, gulp-eslint, gulp-jshint, gulp-htmlmin, gulp-rename, gulp-gh-pages, browser-sync)
6. Rellenar todo el código dentro de src.
7. Ejecutar comandos gulp para rellenar directorio dist con archivos de producción (comandos: gulp --tasks,
    - css
    - sass
    - js
    - img
    - watch)
8. Con gulp watch se ejecutan las tareas de forma automática cuando se modifica un fichero y además crea el servidor de desarrollo con BrowserSync

## Directorio Yeoman

1. Crear un directorio simple con mkdir
2. Instalar Yeoman y el generador de webapp(comandos: npm install -g yo, npm install -g generator-webapp)
3. Ejecutamos yo en la terminal y seleccionamos la opción Run a generator -> webapp
4. Completamos el asistente de Yeoman
