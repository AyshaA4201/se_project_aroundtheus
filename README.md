# Project 8: Around The U.S.

### Overview

- Intro
- Key Features
- Planned Improvements
- Project Link
- Figma
- Video
- Technologies Used
- Getting Started

**Intro**

This is a fun and interactive web app where you can share snapshots from your adventures around the U.S., check out other people’s posts, and even give them a “like.” You’ll have your own profile section (where you can update your name and description anytime) and a beautiful grid of photo cards that you can add to as you go.

It started out as a simple project built with HTML, CSS, JavaScript, Figma, and Git Bash — but has since been leveled up! Now it’s powered by object-oriented JavaScript, organized into modular ES6 classes, and bundled with Webpack for smooth performance, responsive styling, and easy asset management.

**Key Features**

    - Responsive layout for desktop, tablet, and mobile.
    - Editable profile information stored in the UI.
    - Add new photo cards via a form modal.
    - View a larger image in a popup when clicking on a card’s photo.
    - Like/unlike cards.
    - Form validation with real-time error messages.
    - Modular code structure with separate classes for Card, FormValidator, Section, UserInfo, Popup, PopupWithForm, and PopupWithImage.
    - Loosely coupled components for flexibility and maintainability.
    - Webpack setup with Babel, PostCSS (Autoprefixer & CSSNano), image/font processing, and separate development/production builds.

**Planned Improvements**

    - Refine media queries to better match the original Figma design.
    - Add persistent data storage (e.g., API integration) so profile edits and cards remain after refresh.

**Project Link**

- [Link to the project](https://ayshaa4201.github.io/se_project_aroundtheus/)

  **Figma**

- [Link to the project on Figma](https://www.figma.com/file/ii4xxsJ0ghevUOcssTlHZv/Sprint-3%3A-Around-the-US?node-id=0%3A1)

**Video**

- [Link to the video on Google Drive](https://drive.google.com/file/d/177AJNXU-1b_l2HXrv2gjr9u9C6XxWBX0/view?usp=sharing)
  Excuse the volume changing in the video! I will try to fix it soon.

**Technologies Used**

    - HTML5: semantic markup structure.
    - CSS3: responsive design with flexbox, grid, and media queries.
    - JavaScript (ES6): object-oriented programming and modular structure.- Webpack: asset bundling, JS transpilation, and CSS/image processing.- Babel: transpiling ES6+ JavaScript for browser compatibility.
    - PostCSS with Autoprefixer: automatic vendor prefixing for cross-browser compatibility.
    - CSSNano: CSS minification for optimized load times.
    - Git & GitHub: version control and hosting.
    - Figma: design reference and layout specifications.

**Getting Started**

Follow these steps to run the project locally on your machine (GitBash code is italicized):

1. Clone the repository

_git clone https://github.com/AyshaA4201/se_project_aroundtheus.git_
_cd se_project_aroundtheus_

2. Install dependencies
   Make sure you have Node.js and npm installed. Then run:

_npm install_

3. Run the development server
   This will start a local server with hot reloading:

_npm run dev_

4. Build for production
   This will generate the dist folder with optimized files:

_npm run build_

5. Open the project

- For development: the console will show a local URL (usually http://localhost:8080).
- For production: open the dist/index.html file in your browser.
