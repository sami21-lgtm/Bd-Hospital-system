<div align="center">

# 🏥 CarePlus Sepcialized Hospital

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.19-blue?style=for-the-badge&logo=express)](https://expressjs.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-purple?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)](#)

*A high-performance, compact, and responsive clinic management web application featuring a modern **Glassmorphism UI** overlay and a robust Express.js backend API.*

</div>

---

## ✨ Key Highlights

* 🎨 **Glassmorphism UI Engine:** Custom CSS frosted-glass effects with dynamic background overlay filtering (`backdrop-filter: blur(10px)`).
* 📐 **Compact & Density-Optimized:** Tightened padding, auto-fit grids, and sleek visual proportions for enhanced desktop data density.
* 📱 **Adaptive Responsive Design:** Integrated slide-out navigation drawer and fluid grid reflow for mobile and tablet devices.
* 📊 **Real-Time Data Cards:** Instant status trackers for patient counts, appointments, cabin allocations, and doctor availability.
* 🔌 **RESTful API Backend:** Express.js routing engine providing structured JSON payloads for authentication and clinic telemetry.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Usage Description |
| :--- | :--- | :--- |
| **Frontend** | `HTML5` / `CSS3` | Flexbox, Grid, CSS Variables, Backdrop Filters |
| **Icons & Typography**| `Plus Jakarta Sans` | Modern typography setup |
| **Backend** | `Node.js` + `Express.js` | REST API routes & static file hosting |
| **Middleware** | `cors`, `dotenv` | Cross-Origin resource handling & configuration |
| **Development** | `Nodemon` | Hot-reloading server environment |

---

## 📂 Project Architecture

```text
clinic-dashboard/
│
├── 📂 public/
│   ├── 📄 index.html          # Main Application Markup
│   ├── 🎨 style.css           # Custom Glassmorphism & Layout System
│   └── 🖼️ images (16).jpg     # Dashboard High-Res Background Graphic
│
├── ⚙️ server.js               # Express Server & API Controllers
├── 📦 package.json            # Dependencies & Engine Scripts
└── 📄 README.md               # Application Documentation
