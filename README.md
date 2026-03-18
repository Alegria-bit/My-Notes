# App Keeper (My-Notes)

## 📌 Project Overview

App Keeper is a React note-taking app built with Create React App and pre-built UI components. Users can create, view, and delete notes in a simple, draggable-style interface.

## 🚀 Key Features

- Add and remove notes
- Responsive note cards with visual styling
- Global CSS in `src/styles.css`
- Built-in development and production build scripts

## 🛠️ Tech Stack

- React 17
- React DOM
- Create React App (`react-scripts`)
- MUI (Material UI) icons and components

## 📁 Project Structure

- `public/` — static public assets (HTML, optional CSS)
- `src/index.js` — app entry point
- `src/styles.css` — global styles (copied from public for CRA behavior)
- `src/components/` — React components (`App`, `Header`, `Footer`, `CreateArea`, `Note`)

## ⚙️ Setup & Run

1. Clone repo

    ```bash
    git clone <repo-url>
    cd "14.0 App Keeper"
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Run development server

    ```bash
    npm start
    ```

4. Build production bundle

    ```bash
    npm run build
    ```

## 🧩 npm Scripts

- `npm start` — start local dev server
- `npm run build` — create optimized production bundle
- `npm test` — run tests (CRA default)
- `npm run eject` — eject config (one-way)

## 💡 Notes

- CSS should be imported from `src/styles.css` in `src/index.js` (not from `public/`).
- If you get an error about importing from outside `src`, move or clone styles into `src`.

## 📄 License

MIT
