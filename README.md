# Repaso 
## Rick and Morty
<p align='left'>
    <p>Landing</p>
    <img src='https://res.cloudinary.com/dcpcja2qg/image/upload/v1670785080/Captura_de_pantalla_181_xc2zps.png' </img>
     <p>Help</p>
    <img src='https://res.cloudinary.com/dcpcja2qg/image/upload/v1670785526/Captura_de_pantalla_190_rda7qs.png' </img>
     <p>Card Character </p>
    <img src='https://res.cloudinary.com/dcpcja2qg/image/upload/v1670785277/Captura_de_pantalla_183_xx3rr3.png' </img>
     <p>Nav</p>
    <img src='https://res.cloudinary.com/dcpcja2qg/image/upload/v1670785658/Captura_de_pantalla_189_fwlm02.png' </img>
     <p>Create Form (in process)</p>
    <img src='https://img.freepik.com/vector-gratis/ilustracion-concepto-proceso_114360-4229.jpg?auto=format&h=200' </img>
</p>

## Objetivos del Proyecto
Construir una App utlizando React, Redux, Node y Sequelize.

## Comenzando
1. Forkear el repositorio para tener una copia del mismo en sus cuentas
2. Clonar el repositorio en sus computadoras para comenzar a trabajar

## BoilerPlate
El boilerplate cuenta con dos carpetas: ```api``` y ```client```. En estas carpetas estará el código del back-end y el front-end respectivamente.

En api crear un archivo llamado: .env que tenga la siguiente forma:
```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
Reemplazar ```usuariodepostgres``` y ```passwordDePostgres``` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos con el nombre **repasopi**.

El contenido de client fue creado usando: Create React App.


## Base de datos
Tendrá los siguientes modelos:

**Character:**
- id
- name
- species
- origin
- image
- created 

**Episode:**
- id
- name

La relación de Character y Episode será de muchos a muchos, ya que un personaje puede aparecer en varios episodios, y en un episodio pueden haber varios personajes.

## Backend
Tendrá las siguientes rutas:
- [ ] GET /characters:
    - Obtener el listado de personajes
    - Debe devolver solo los datos necesarios para la ruta principal
- [ ] GET /episodes:
    - Debe devolver un listado con todos los episodios 
    - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ ] POST /character:
    - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje 
    - Crea un personaje en la BDD


## Frontend
Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

**Ruta principal**
- [ ] Área donde se verá el listado de personajes, incluyendo:
    - Imágen 
    - Nombre
    - Origen
    - Especie
    - Episodios
 
**Ruta de creación de personaje**
- [ ] Un formulario *controlado con JavaScript* con los siguientes campos:
    - Nombre
    - Origen
    - Especie
    - Imágen
- [ ] Posibilidad de agregar uno o más episodios.
- [ ] Botón para crear el personaje. 

## Extras
- [ ] Ordenamiento




