# Project 8: Around The U.S.

### Overview

- Intro
- Key Features
- Planned Improvements
- Project Link
- Figma
- Video
- Technologies Used

**Intro**

This is a responsive, interactive web application where users can share photos from their travels around the U.S., view other users’ posts, and “like” them. It features a profile section (with editable name and description) and a grid of photo cards that can be added dynamically.

This project was originally built using HTML, CSS, JavaScript, Figma, and Git Bash, and later refactored to use object-oriented JavaScript, modular ES6 classes, and Webpack for bundling, CSS processing, and asset management.

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
