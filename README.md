
# 📋 Job Application Tracker

A simple web app to help you track your job applications, schedule interviews, and manage your job hunt progress in one place.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Shadcn UI**.

---

## 🚀 Features

- 📄 Add and manage job applications (company, position, status, notes)
- 📆 Schedule interviews for any application
- 📝 Add and edit notes for each application
- 📌 Status labels for quick progress tracking (Pending, Interview Scheduled, Offered, etc.)
- 🎨 Clean, dark UI theme with responsive layout
- 🔔 Toast notifications for actions and errors
- ⚡ Powered by Zustand for local state management

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **Zustand** (state management)
- **Lucide-react** (icons)
- **React Toastify** (notifications)
- **UUID** (unique IDs)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/job-application-tracker.git
cd job-application-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/               // Shadcn UI components
│   ├── AvailableApplication.tsx
│   └── ScheduleInterviewModal.tsx
├── store/
│   └── useApplicationStore.ts  // Zustand store
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎨 Screenshots (Optional)

_Add a couple of screenshots or GIFs of your UI here if you'd like._

---

## ✅ Todo / Improvements

- Edit and delete job applications
- Edit and reschedule interviews
- Add filtering and sorting options
- Persist data to localStorage or a database
- Add authentication (optional for portfolio)

---

## 📄 License

Open-source for personal and educational use. Customize freely!

---

## 🙌 Author

**[Adnan Adam](https://github.com/adnanaadam)** — Web Developer, passionate about clean UIs and productivity tools.
