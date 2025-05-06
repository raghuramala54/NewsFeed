# 🌱 Startup News Feed Platform
A beautifully crafted full-stack web application that aggregates real-time news articles about startups, founders, and tech trends. Built with **Next.js 14 (App Router)**, **PostgreSQL**, and **Node.js (Express)**, this platform offers a modern, responsive, and glassmorphic UI with rich content integration.

![Screenshot from 2025-05-06 14-10-09](https://github.com/user-attachments/assets/81772ca5-a0fe-451a-9901-122bae2b199b)


---

## ✨ Features

- 📰 Fetches real-time startup news using GNews API.
- 🔍 View detailed articles with startup metadata.
- 🌿 Glassmorphic, earthy, and modern UI design.
- 👥 Founder and Startup entity architecture (backend complete).
- 📬 Newsletter subscription, job listings, and profile creation (coming soon).
- 🔐 Admin-only secure seeding with JWT authentication.
- 🔄 Modular and scalable with clean folder structure.

---

## 🧱 Tech Stack

| Frontend      | Backend             | Database    | Styling        |
|---------------|---------------------|-------------|----------------|
| Next.js 14    | Node.js + Express   | PostgreSQL  | Tailwind CSS   |
| TypeScript    | Sequelize ORM       | pg-promise  | Glassmorphism  |

---

##  Install Dependencies

npm install

---

##  Setup .env File

DATABASE_URL=your_postgresql_url
JWT_SECRET=your_admin_jwt_secret
GNEWS_API_KEY=your_gnews_api_key

---

##  Run the Development Server

npm run dev

---

🔒 Admin Seeding
Only authenticated admin users can seed real startup/news/founder/job data via protected routes. The backend supports JWT authentication for secure operations.

📌 Roadmap
✅ Real-time startup news

✅ Detail view per article

✅ Admin-protected data seeding

🔜 Founder & Startup profile pages

🔜 Job listings module

🔜 Newsletter subscriber system

📄 License
MIT License

Built with ❤️ by RajaRaghuRam Pydi
[GitHub](https://github.com/raghuramala54/NewsFeed) | [Linkedin] (https://www.linkedin.com/in/raghuramala54/)



