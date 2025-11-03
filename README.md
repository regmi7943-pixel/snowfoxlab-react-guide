# 🌿 Snow Fox Lab – Frontend Internship Guide

Welcome to **Snow Fox Lab Pvt. Ltd.** 👋  
This guide will help you get started with your **first React.js project** using **Vite**, from setup to your first component.

---

## 🧠 Overview

As a Frontend Intern at Snow Fox Lab, you’ll learn how to:

- Understand the basics of **JavaScript (ES6+)**
- Set up a **React.js** environment using **Vite**
- Build and organize your first project
- Collaborate using **GitHub**

---

## ⚙️ JavaScript Prerequisites

Before diving into React, make sure you understand the basics of modern JavaScript (ES6+):

### 📚 Topics to Review

1. **Variables** – `const`, `let`, and `var`
2. **Functions & Arrow Functions**
3. **Objects and Arrays**
4. **Array Methods** – `map()`, `filter()`, `reduce()`
5. **Destructuring & Spread Operator**
6. **Modules (import/export)**
7. **Promises & async/await**
8. **DOM Manipulation** (optional but helpful)

🧩 Recommended learning:

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [FreeCodeCamp – JavaScript Basics](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

---

## 🛠️ Prerequisite Setup

Before you begin, install these tools:

| Tool                      | Description                                            | Download                                                |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------------- |
| **Node.js (v18+)**        | JavaScript runtime for building and running React apps | [nodejs.org](https://nodejs.org/en/download)            |
| **npm** (comes with Node) | Package manager for installing dependencies            | Installed with Node                                     |
| **Git**                   | Version control system to clone and push code          | [git-scm.com](https://git-scm.com/downloads)            |
| **VS Code**               | Recommended code editor                                | [code.visualstudio.com](https://code.visualstudio.com/) |

---

## 🔍 Check Your Setup

Run these commands in your terminal to verify everything is installed correctly:

```bash
node -v
npm -v
git --version
```

✅ If each returns a version number, you’re all set to go!

# 🚀 Create Your First React App with Vite

## 1️⃣ Create a New Project

```bash
npm create vite@latest my-first-react-app
```

When prompted:

```bash
Select a framework: React
```

```bash
Select a variant: JavaScript
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Start the Development Server

```bash
npm run dev
```

Visit the URL shown in the terminal (usually http://localhost:5173/)  
🎉 You’ve just started your first React app!

# 🧹 Clean Up Unnecessary Files

### Inside your project folder, remove files you don’t need:

1. **Delete everything inside** `/src` **except** `main.jsx`, and `App.jsx`
2. **Remove unnecessary CSS and SVG files**
3. **Update** `App.jsx` to something simple:

```bash
function App() {
  return (
    <div>
      <h1>Welcome to Snow Fox Lab Internship</h1>
      <p>This is your first React project using Vite.</p>
    </div>
  );
}

export default App;
```

# 📄 Documentation and Comments

Throughout your code:

1. Add comments to explain what each function or component does
2. Follow a clean code structure
3. Commit changes frequently with clear messages

Example

```bash
// This is a single-line comment

{/*
  This is a multi-line comment in JSX
  Use it to explain code blocks inside your components
*/}
```

# Your First Challenge

Try creating your first simple component!

Task:

Create a new file src/components/Card.jsx and add your name and role inside a card layout.

Example

```
function Card() {
  return (
    <div>
      <h2>👋 Hello, I’m [Your Name]</h2>
      <p>Frontend Intern at Snow Fox Lab</p>
    </div>
  );
}

export default Card;
```

# Then import inside `App.js`:

```
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>Welcome to Snow Fox Lab Internship</h1>
      <Card />
    </div>
  );
}

export default App;
```

# 🌱 Keep Creating, Keep Learning

At Snow Fox Lab, we believe in learning by building.

Every small project helps you grow your understanding and confidence.

💬 If you get stuck, don’t hesitate to ask questions in the Slack channel — we’re here to help.

🚀 Keep experimenting, stay curious, and keep coding!

# 🦊 Snow Fox Lab Pvt. Ltd.

“Helping learners grow through real projects.”
