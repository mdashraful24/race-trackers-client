# RaceTrackers

![RaceTrackers Banner](https://i.ibb.co.com/rWhHRQL/Screenshot-30.png)

**The RaceTrackers** is a comprehensive platform designed to simplify the organization and participation process for marathon events. By connecting event organizers with participants, the system fosters seamless communication and efficient management of events.

🚀 **Live Demo:**  
• [RaceTrackers](https://marathonproject-2a4f2.web.app/)  

## 📖 Table of Contents

- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration (.env)](#configuration-env)
- [Usage](#usage)

---

## ✨ Key Features

- **Event Creation** – Organizers can create and customize marathon events with details such as date, location, and participant limits.
- **User Registration** – Participants can sign up for events through a user-friendly registration process.
- **Personal Dashboard** – Users can view and manage their registrations, track event details, and stay updated on event announcements.
- **Secure User Authentication** – The platform ensures secure login and data protection for both organizers and participants.
- **Responsive Design** – The system is optimized for desktop, tablet, and mobile devices, ensuring accessibility for all users.

---

## 🛠️ Technology Stack

| Category           | Technologies Used                                         |
| ------------------ | --------------------------------------------------------- |
| **Frontend**       | React, React Router, Tailwind CSS, DaisyUI               |
| **Backend**        | Node.js, Express.js, JWT-token, Dotenv                                  |
| **Database**       | MongoDB (Atlas)                                       |
| **Authentication**        | Firebase Authentication                                  |
| **Hosting**        | Firebase (Frontend), Vercel (Backend)                                         |
---

## 🛠 Installation

### Prerequisites

- **Node.js** (>= 18)
- **Firebase Account**

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/mdashraful24/mw-assignments11-client.git
   cd racetrackers
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables** (see `.env` below)
4. **Run the development server**
   ```sh
   npm run dev
   ```

---

## ⚙️ Configuration (.env)

Create a `.env` file in the root directory and configure the following:

```env
# Firebase Configuration
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

🚨 **Important:** Never expose your `.env` file in public repositories. Use `.gitignore` to keep it secure.

---

## 🚀 Usage

1. **Create an Event** – Organizers set up events with details such as date, location, and participant limits.
2. **Register for an Event** – Participants sign up and manage their marathon registrations.
3. **Track Event Progress** – Monitor participant data and stay updated on event announcements.

---

## 🌍 Live Demo & Repository

- **Live Site:**  
  • [The RaceTrackers](https://marathonproject-2a4f2.web.app/)

---

🚀 **Join The RaceTrackers and make your marathon events seamless!** 🏃‍♂️🏁

