# 🌸 Lista de Publicaciones con React

Este proyecto es una **aplicación web dinámica** desarrollada con **React** y **Vite**, que consume la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) para mostrar una lista de publicaciones de manera **centrada, responsive y con un diseño femenino**.

---

## 🎯 Objetivo del proyecto

- Practicar fundamentos de **React**: componentes, estados (`useState`) y efectos (`useEffect`).
- Consumir datos desde una **API externa**.
- Renderizar los datos de forma **dinámica** en la interfaz de usuario.
- Aplicar **Bootstrap** y CSS personalizado para un diseño **femenino, pastel y centrado**.

---

## 🛠 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- HTML5 / CSS3
- JavaScript (ES6+)

---

## 📂 Estructura del proyecto

lista-publicaciones-react/
├─ node_modules/
├─ public/
├─ src/
│ ├─ components/
│ │ └─ PostsList.jsx
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
└─ index.html

---

## 🚀 Funcionalidades

- Muestra **las primeras 10 publicaciones** de la API JSONPlaceholder.
- Las publicaciones se renderizan en **cards femeninas**, centradas y responsive.
- Se muestra un **spinner de carga** mientras se obtienen los datos.
- Muestra un **mensaje de error** si la petición falla.
- Diseño con **tipografía redondeada**, colores pastel y **sombras suaves**.

---

## 🎨 Diseño

- Cards blancas con bordes redondeados y sombra ligera.
- Fondo rosa pastel (`#FFF0F5`).
- Títulos en color lila (`#B266FF`) y texto secundario en gris suave.
- Header centrado con título, subtítulo y línea decorativa.
- Cards responsive y con efecto hover para mejor experiencia visual.

---

## ⚡ Cómo correr el proyecto

1. Clonar el repositorio:

```bash
git clone <URL_DE_TU_REPO>

2. Entrar en la carpeta del proyecto:

cd lista-publicaciones-react

3. Instalar dependencias:

npm install

4. Ejecutar el proyecto:

npm run dev

5. Abrir el proyecto en tu navegador en:

http://localhost:5173


💻 Uso

Al abrir la aplicación, verás:

Header con título y subtítulo centrados.

Cards con las primeras 10 publicaciones de la API.

Spinner mientras se cargan los datos.

Mensaje de error si la API falla.

📌 Extras

Diseño responsive para móviles, tablets y escritorio.

Cards animadas al hacer hover.

Fácil de extender para agregar más funcionalidades como paginación, filtros o búsqueda.

📄 Autor

Geraldine Garcés
