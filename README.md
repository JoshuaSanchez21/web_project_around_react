# WEB_PROJECT_AROUND_REACT

Este proyecto forma parte del **bootcamp de Desarrollo Web de TripleTen** y consiste en una versión en **React** del proyecto "Around the U.S.".

La aplicación muestra un perfil de usuario y una galería de tarjetas con imágenes de lugares. También incluye ventanas emergentes (popups) para editar el perfil, cambiar el avatar, añadir nuevas tarjetas y visualizar imágenes en tamaño completo.

## 🚀 Tecnologías utilizadas

- React
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3
- BEM (Block Element Modifier)
- ESLint

## 📁 Estructura del proyecto

WEB_PROJECT_AROUND_REACT
│
├── blocks/ # Estilos CSS organizados por bloques (metodología BEM)
├── images/ # Imágenes utilizadas en el proyecto
├── node_modules/ # Dependencias del proyecto
├── public/ # Recursos públicos (ícono de Vite)
├── vendor/ # Fuentes y normalize.css
│
├── src/
│ ├── components/
│ │ ├── Header/
│ │ │ └── Header.jsx
│ │ │
│ │ ├── Footer/
│ │ │ └── Footer.jsx
│ │ │
│ │ └── Main/
│ │ ├── Main.jsx
│ │ │
│ │ └── components/
│ │ ├── Card/
│ │ │ └── Card.jsx
│ │ │
│ │ └── Popup/
│ │ ├── Popup.jsx
│ │ │
│ │ ├── ImagePopup/
│ │ │ └── ImagePopup.jsx
│ │ │
│ │ └── form/
│ │ ├── EditAvatar/
│ │ │ └── EditAvatar.jsx
│ │ │
│ │ ├── EditProfile/
│ │ │ └── EditProfile.jsx
│ │ │
│ │ └── NewCard/
│ │ └── NewCard.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md

## 🧩 Componentes principales

### App

Componente raíz que renderiza:

- Header
- Main
- Footer

### Header

Contiene el logo de la aplicación.

### Main

Contiene:

- Información del perfil
- Galería de tarjetas
- Lógica para abrir y cerrar popups usando `useState`

### Card

Representa una tarjeta de imagen en la galería.  
Al hacer clic en una imagen se abre un **popup con la imagen ampliada**.

### Popup

Componente reutilizable que renderiza distintos tipos de ventanas emergentes:

- Formularios
- Visualización de imágenes

### Formularios disponibles

- Editar perfil
- Editar avatar
- Añadir nueva tarjeta

### ImagePopup

Muestra una imagen ampliada junto con su descripción.

## Enlace GitHub

https://joshuasanchez21.github.io/web_project_around_react/
