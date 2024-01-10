# Ejercicio Sass:
En este ejercicio se pondrá en práctica el tema 1 (Herramientas de trabajo) y el tema 2 (Introducción a Sass). Para desarrollar las tareas que se especifican, se ha creado una máquina virtual en el STIC. Se describe el proceso que deben seguir para configurarlas.
## Configuración de la máquina virtual:
- Instalar nodejs
- Instalar npm
- Instalar git
- Instalar Yeoman (npm)
- Instalar el generador generator-learnfe (npm)
- Instalar Gulp (npm)
- Crear un directorio para el proyecto.
- Iniciar un proyecto básico para aprendizaje: generator-learnfe (npm)
- Iniciar el control de versiones (git)
- Iniciar el control de dependencias (npm)
- Automatizar tareas (Gulp):
    - Actualizaciones en tiempo real en el navegador.
    - Minificar css
    - Sources maps
- Instalar Ruby, ya que isntalaremos Sass como una gema de Ruby. Es decir, que Sass lo instalamos usando el administrador de paquetes de Ruby, llamado `gem`
- Instalar sass (gem) 

## Observaciones
El generator learnfe crea un proyecto muy básico, con lo esencial, para que creen ustedes el fichero `gulpfile.js` 
Pueden desplegar el proyecto como una github page.
### Utilidades:
Transpilador Sass online: (https://www.sassmeister.com/)  
Codificar Front End online: (https://codepen.io/pen/)

## Descripción del trabajo a realizar
En la imagen se propone una estructura para una landing page de una empresa. El objetivo es especificar los estilos utilizando Sass.
  
![Mockup ejercicio](ejercicioLanding_21_22.PNG)
  
Se debe tener en cuenta las siguientes consideraciones:
- Deben definirse módulos, utilizando al menos los parciales:
    - _variables.scss
    - _mixins.scss: 
    - _base.scss: Estilos comunes, aplicables a todas las páginas del sitio.
- Definir mixins al menos para: 
    - encabezados h1
    - centrar contenido
    - ejemplos de productos y clientes relevantes.
    - imágenes de redes sociales
  
- Anidar los estilos de los botones de form, para que se apliquen estilos específicos en el hover de ellos.
- Anidar los estilos de los elementos dentro del form, para que se resalten cuando tengan el foco.
- Utilizar el mismo estilo en las garantías y contacto, pero variando el color de fondo.

