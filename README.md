# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# 🌟 İlknur's Personal Portfolio Website 🌟

[![React](https://img.shields.io/badge/React-v18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-v5.4.0-yellow?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3.4.10-green?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-v11.3.27-purple?logo=framer)](https://www.framer.com/motion/)

## 🎯 About This Project

This is my personal portfolio website where I showcase my skills, projects, and experience as a **React + TypeScript Developer**. The site includes smooth animations, responsive design, and a modern tech stack to ensure a fast and delightful user experience.

**Live Demo:** [Check it out here!](https://ilknur.github.io/) 🚀

## 🚀 Tech Stack

This project is built with the following technologies:

- **React** for building the UI.
- **TypeScript** for type safety and better developer experience.
- **Vite** for fast and efficient bundling and development.
- **Tailwind CSS** for styling and responsiveness.
- **Framer Motion** for smooth animations and transitions.
- **React Icons** for iconography.

## ✨ Features

- **Fully responsive design**: Works seamlessly across mobile, tablet, and desktop devices.
- **Interactive animations**: Framer Motion is used for smooth transitions and hover effects.
- **Contact Carousel**: An animated carousel for social media icons.
- **Smooth scrolling**: Navigation is enhanced with smooth scrolling between sections.
- **Back to Top Button**: A handy button appears when you scroll down.
- **Downloadable CV**: You can download my CV directly from the site.

## 🛠️ Installation and Setup

To get started with this project, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ilknur/ilknur.github.io.git
   ```

   ```bash
   cd ilknur.github.io
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Build the project for production:**

   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 📦 Available Scripts

In the project directory, you can run the following scripts:

- `npm start` – Starts the Vite development server.
- `npm run build` – Builds the app for production.
- `npm run preview` – Previews the production build locally.
- `npm run deploy` – Deploys the app to GitHub Pages.

## 👨‍💻 Developer Notes

- **TypeScript**: The project is fully typed with TypeScript. Interfaces for components and props are defined in the `/types` folder.
- **Animations**: Framer Motion is used for animating UI elements, such as the **scroll-to-top button** and **carousel icons**.
- **Responsive Design**: Tailwind CSS ensures that the website looks great on all devices.

## 🤝 Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. All contributions are welcome!

## 📧 Contact

Feel free to reach out to me via [LinkedIn](https://www.linkedin.com/in/ilknrgzl/) or [GitHub](https://github.com/ilknur).
"# ilknur.github.io"
"# ilknrgzll.github.io" 
