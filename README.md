# ColorQuest React

## Descripción del Proyecto
Hola, bienvenidos a **ColorQuest React**. Este es mi proyecto personal, una aplicación web interactiva desarrollada con React. El proyecto es una excelente manera de poner a prueba mis conocimientos en React, CSS y lógica de programación. La idea es completar la implementación del proyecto, mejorando la lógica y funcionalidad de los componentes principales: `<Home>`, `<ColorGame>`, y `<Doable>`.

## Características
- **Home**: Página de inicio con navegación a los juegos y autenticación.
- **ColorGame**: Juego interactivo que desafía a los usuarios a identificar colores RGB.
- **Doable**: Gestión de tareas con autenticación, creación, edición y eliminación de tareas.

## Funcionalidad
- **Renderizado Condicional**: Uso de la variable de estado `page` para renderizar componentes según la ruta.
- **Navegación**: Implementación de eventos `onClick` para cambiar la variable de estado `page`.
- **ColorGame**: Generación de colores aleatorios, manejo de intentos del jugador y lógica de juego para ganar o perder.
- **Doable**: Autenticación de usuario, gestión de tareas (crear, editar, eliminar) y consumo de una API.

## Lenguajes y Tecnologías
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **JavaScript**: Lógica de programación y manipulación del DOM.
- **CSS**: Estilos para la interfaz de usuario.
- **Insomnia**: Herramienta para probar la API (archivo `doable-api.json` incluido).

## Recursos
- **Diseño en Figma**: [Enlace al diseño](https://www.figma.com/design/QJQjUm1zlJmtB7NrVFKBwX/React-Evaluation?node-id=0-1&m=dev)
- **API Importable en Insomnia**: Archivo `doable-api.json` en la raíz del repositorio.

## Instalación y Uso
Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:
1. Clona el repositorio:

```bash
git git clone https://github.com/tu_usuario/colorquest-react.git
cd colorquest-react
```
2. Instala las dependencias:

```bash
npm install
```
### Desarrollo
Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm start
```


## Estructura del Proyecto
```plaintext
├── public
│   └── index.html
src/
├── assets/
├── components/
│   ├── App/
│   │   ├── App.jsx
│   │   ├── App.module.css
│   │   ├── App.test.js
│   │   ├── index.js
│   │   └── utils.js
│   ├── Authenticated/
│   │   ├── Authenticated.jsx
│   │   ├── Authenticated.module.css
│   │   ├── Authenticated.test.js
│   │   └── index.js
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── index.js
│   ├── ColorGame/
│   │   ├── ColorGame.jsx
│   │   ├── ColorGame.module.css
│   │   ├── ColorGame.test.js
│   │   └── index.js
│   ├── Doable/
│   │   ├── Doable.jsx
│   │   ├── Doable.module.css
│   │   ├── Doable.test.js
│   │   └── index.js
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.module.css
│   │   ├── Home.test.js
│   │   └── index.js
│   ├── Unauthenticated/
│   │   ├── Unauthenticated.jsx
│   │   ├── Unauthenticated.module.css
│   │   ├── Unauthenticated.test.js
│   │   └── index.js
├── contexts/
│   └── authContext.jsx
├── services/
│   └── tasks.js
├── styles/
│   └── constants.js
└── main.jsx
```
## Desafíos 
### Componente `<App>`
- **Renderizado Condicional**: Utilizo la variable de estado `page` para decidir qué componente renderizar.
- **Navegación**: Implemento los eventos `onClick` para actualizar la variable de estado `page`.

### Componente `<ColorGame>`
- **Generación de Colores Aleatorios**: Utilizo `getRandomColors` para generar combinaciones RGB.
- **Estado del Juego**: Configuro las variables de estado `numOfColors`, `colors`, y `attempts`.
- **Lógica de Juego**: Implemento funciones `handleReset`, `handleChangeNumber`, y eventos `onClick` en los cuadrados de colores.

### Componente `<Doable>`
- **Contexto de Autenticación**: Habilito y consumo el contexto de autenticación.
- **Gestión de Tareas**: Implemento funciones `handleSubmit`, `handleEdit`, y `handleDelete` para CRUD de tareas.
- **Ordenamiento y Filtros**: Implemento lógica para ordenar y filtrar las tareas utilizando utilidades proporcionadas.

## Despliegue

La aplicacion se encuentra desplegada en Render en la siguente URL:

[Enlace al proyecto](https://colorquest-react.onrender.com/).

---

¡Gracias por revisar ColorQuest React! Estoy emocionada por compartir este proyecto y espero que disfruten explorándolo tanto como yo disfruté desarrollándolo. 🚀