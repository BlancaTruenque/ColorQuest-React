# ColorQuest React

## Descripción del Proyecto
ColorQuest React es una aplicación web interactiva desarrollada con React. El proyecto pone a prueba tus conocimientos en React, CSS y lógica de programación, implementando una serie de componentes y funcionalidades. El objetivo es completar la implementación del proyecto, mejorando la lógica y funcionalidad de los componentes principales: `<Home>`, `<ColorGame>`, y `<Doable>`.

## Características
- **Home**: Página de inicio con navegación a los juegos y autenticación.
- **ColorGame**: Juego interactivo que desafía a los usuarios a identificar colores RGB.
- **Doable**: Gestión de tareas con autenticación, creación, edición y eliminación de tareas.

## Objetivo
El objetivo de este proyecto es reforzar los conceptos aprendidos en las últimas semanas, incluyendo el manejo de estados, renderizado condicional, contextos, y componentes reutilizables en React.

## Funcionalidad
- **Renderizado Condicional**: Uso de la variable de estado `page` para renderizar componentes según la ruta.
- **Navegación**: Implementación de eventos `onClick` para cambiar la variable de estado `page`.
- **ColorGame**: Generación de colores aleatorios, manejo de intentos del jugador, y lógica de juego para ganar o perder.
- **Doable**: Autenticación de usuario, gestión de tareas (crear, editar, eliminar), y consumo de una API.

## Lenguajes y Tecnologías
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **JavaScript**: Lógica de programación y manipulación del DOM.
- **CSS**: Estilos para la interfaz de usuario.
- **Insomnia**: Herramienta para probar la API (archivo `doable-api.json` incluido).
- **Figma**: Diseño visual de la aplicación.

## Recursos
- **Diseño en Figma**: [Enlace al diseño](https://www.figma.com)
- **API Importable en Insomnia**: Archivo `doable-api.json` en la raíz del repositorio.
- **Aplicación de Referencia**: [ColorQuest React App](https://codeable-react-evaluation.netlify.app/)

## Instalación y Uso
1. Clona el repositorio: `git clone https://github.com/tu_usuario/colorquest-react.git`
2. Navega al directorio del proyecto: `cd colorquest-react`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`
5. Importa el archivo `doable-api.json` en Insomnia para probar las rutas de la API.

## Estructura del Proyecto
- **`src/components`**: Componentes reutilizables como `<Home>`, `<ColorGame>`, `<Doable>`, y `<Button>`.
- **`src/contexts`**: Contextos de React, incluyendo `authContext` para autenticación.
- **`src/services`**: Servicios para interactuar con la API (`task.js`).
- **`src/utils`**: Utilidades para ordenamiento y filtrado de tareas (`utils.js`).

## Desafíos Técnicos
### Componente `<App>`
- **Renderizado Condicional**: Utiliza la variable de estado `page` para decidir qué componente renderizar.
- **Navegación**: Implementa los eventos `onClick` para actualizar la variable de estado `page`.

### Componente `<ColorGame>`
- **Generación de Colores Aleatorios**: Utiliza `getRandomColors` para generar combinaciones RGB.
- **Estado del Juego**: Configura las variables de estado `numOfColors`, `colors`, y `attempts`.
- **Lógica de Juego**: Implementa funciones `handleReset`, `handleChangeNumber`, y eventos `onClick` en los cuadrados de colores.

### Componente `<Doable>`
- **Contexto de Autenticación**: Habilita y consume el contexto de autenticación.
- **Gestión de Tareas**: Implementa funciones `handleSubmit`, `handleEdit`, y `handleDelete` para CRUD de tareas.
- **Ordenamiento y Filtros**: Implementa lógica para ordenar y filtrar las tareas utilizando utilidades proporcionadas.

## Testing
- Implementa pruebas para 2 componentes de React de tu elección.

## Requerimiento Opcional
- Refactoriza la aplicación para incluir React Router, reemplazando la navegación con variables de estado.
