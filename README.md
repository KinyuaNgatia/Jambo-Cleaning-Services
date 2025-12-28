# 🧹 Jambo Services - Professional Cleaning Solutions

![Jambo Services Logo](assets/images/resources/logo-2.png)

Welcome to **Jambo Services**, a premium, fully responsive web application designed for a modern cleaning service business. Whether it's residential, commercial, or specialized cleaning, Jambo Services provides a seamless experience for clients to explore services, book appointments, and manage their accounts.

---

## 🚀 Key Features

- **🔐 Secure Authentication**: Integrated with **Supabase Auth** for reliable user Sign-up and Login.
- **📱 Fully Responsive**: Optimized for desktops, tablets, and smartphones using Bootstrap 5 and custom CSS.
- **📂 Comprehensive Services**: Dedicated pages for House, Office, Commercial, Residential, Window, Carpet, Floor, and Car cleaning.
- **📩 Real-time Contact Forms**: Fully functional contact and quote forms connected to a **Supabase Database**.
- **🎞️ Interactive UI**: Smooth animations powered by **GSAP** and dynamic carousels using **Owl Carousel** and **Swiper**.
- **📅 Pricing Calculator**: Integrated tool for clients to estimate cleaning costs instantly.

---

## 🛠️ Tech Stack

### Frontend

- **HTML5 & CSS3**: Semantic structure and modern styling.
- **JavaScript (ES6+)**: Core logic and interactivity.
- **jQuery**: DOM manipulation and plugin support.
- **GSAP (GreenSock)**: High-performance UI animations.
- **Bootstrap 5**: Robust responsive grid system.

### Backend & Database

- **Supabase**:
  - **Authentication**: Email/Password sign-in and registration.
  - **PostgreSQL Database**: Secure storage for customer inquiries and bookings.
  - **Client-side SDK**: Direct integration for fast, serverless performance.

---

## ⚙️ Getting Started

### 1. Prerequisites

Since this is a client-side application, you only need a web browser to view the frontend. To enable the backend features (Login/Contact Forms), you need a **Supabase Project**.

### 2. Backend Configuration

Update the Supabase credentials in `assets/js/supabase-config.js`:

```javascript
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
```

### 3. Database Setup

To handle contact form submissions, create a table named `messages` in your Supabase dashboard with the following columns:

- `name` (text)
- `email` (text)
- `Phone` (text)
- `subject` (text)
- `message` (text)

### 4. Running Locally

Simply open `index.html` in any modern web browser or use a "Live Server" extension in your IDE.

---

## 📂 Project Structure

```text
├── assets/
│   ├── css/             # Stylesheets (Bootstrap, Modules, Responsive)
│   ├── js/              # Javascript (Plugins, Script.js, Supabase Config)
│   ├── images/          # Image assets (Logos, Backgrounds, Resources)
│   └── fonts/           # Custom typography
├── index.html           # Homepage
├── about.html           # Company Information
├── services-1.html      # Services Overview
├── contact.html         # Contact Form
├── login.html           # User Login
├── sign-up.html         # User Registration
└── [service-pages].html # Specialized cleaning pages
```

---

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Designed with ❤️ for **Jambo Services**.
