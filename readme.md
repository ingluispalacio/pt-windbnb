# 🌬️🏠 Windbnb – Proyecto de Alojamiento  

¡Bienvenidos a **Windbnb**! 🎉  
Este proyecto es una aplicación web inspirada en **Airbnb**, desarrollada con **HTML, JavaScript y TailwindCSS**, donde los usuarios pueden explorar estancias disponibles, aplicar filtros y visualizar resultados de forma interactiva y responsive.  

---

## ✨ Características principales
- 🔎 **Búsqueda de estancias**: Filtra alojamientos por ciudad y número de huéspedes.  
- 🏡 **Listado dinámico**: Renderizado de estancias a partir de datos en `stays.json`.  
- 🎨 **Estilos con TailwindCSS**: Diseño moderno, responsive y optimizado para diferentes dispositivos.  
- ⚡ **JavaScript modular**: Código organizado en varios archivos (`filters.js`, `utils.js`, etc.) para mayor mantenibilidad.  
- 🖼️ **Diseño de referencia**: Incluye mockups en la carpeta `/src/images/design` para guiar el desarrollo.  

---

## 🚀 Instalación y configuración

1. **Clona el repositorio**  
```bash
git clone https://github.com/ingluispalacio/pt-windbnb.git
cd pt-windbnb
```

2. **Instala dependencias**  
```bash
npm install
```

3. **Compila los estilos de TailwindCSS**  
```bash
npm run tw
```

4. **Abre el proyecto en tu navegador**  
Basta con abrir `index.html` y comenzar a explorar. 🌍  

---

## 📂 Estructura del proyecto

```plaintext
📂 ├── src/
    🗂️ ├── data/
         📊 ├── stays.json          # Datos de ejemplo de las estancias
    📜 ├── scripts/
         📄 ├── filters.js          # Lógica de filtrado
         📄 ├── main.js             # Código principal de la app
         📄 ├── settings.js         # Código del dropdown settings
         📄 ├── stays.js            # Importación y manejo de datos
         📄 └── utils.js            # Funciones auxiliares
    🖼️ ├── images/
         🖼️ └── design/             # Mockups de referencia
    🎨 ├── styles/
         🎨 ├── input.css           # Configuración Tailwind
         🎨 └── output.css          # Estilos generados
📄 ├── index.html
📦 ├── package.json
📖 └── README.md
🚫 └── .gitignore
```

---

## 📊 Tecnologías utilizadas
- **JavaScript (ES6+)** – lógica de la aplicación.  
- **TailwindCSS** – estilos modernos y responsive.  
- **HTML5** – estructura principal.  

---

## 📸 Vista previa  
Puedes ver el diseño de referencia de dos formas:  
1. **Capturas de pantalla**  
   Revisa la carpeta [`/src/images/design`](./src/images/design), donde encontrarás los mockups que sirvieron como guía para el desarrollo del proyecto. 🖼️  

2. **Demo en línea**  
   Explora una versión desplegada del proyecto en este enlace:  
   👉 [Windbnb – Dev Challenges](https://windbnb-dev-challenges.vercel.app/) 🌍 

---

## 🙌 Agradecimientos
Este proyecto fue creado como práctica de desarrollo frontend.  
Gracias por visitar el repositorio y ¡espero tus sugerencias y aportes! 💡  

