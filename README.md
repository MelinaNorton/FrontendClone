# Frontend Clone (Static Webpage)

> **Practice Project** — a static Next.js clone of a Figma template highlighting modern Tailwind and dynamic UI patterns.

---

## Features

* **Responsive Design**: Mobile‑first, fluid layouts across all Tailwind breakpoints (sm, md, lg, xl, 2xl).
* **Tailwind Animations**: Custom transitions and keyframe animations for engaging UI feedback.
* **Dynamic Components**: Reusable React components that render based on provided data.
* **Nodemailer Contact Form**: Serverless API route for sending emails straight from the frontend.

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone <repo-url>
   cd frontend-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment**

   * Copy `.env.example` to `.env.local`:

     ```ini
     SMTP_HOST=smtp.example.com
     SMTP_PORT=587
     SMTP_USER=your_user
     SMTP_PASS=your_pass
     CONTACT_EMAIL=recipient@domain.com
     ```

4. **Run in development**

   ```bash
   npm run dev   # http://localhost:3000
   ```

---

## Structure

```
components/      # Reusable UI & layout components
app/             # Next.js app router (static)
.env.example     # Example env vars for Nodemailer
README.md        # This file
```

---

> *Designed as a learning exercise—perfect for experimenting with Tailwind, Next.js, and simple email integration.*
