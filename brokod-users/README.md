🌟 Brokod User Directory - React Assignment

📝 Project Overview

This is a modern React.js web application built for the Brokod Software Engineer Intern assignment.

The app fetches and displays a list of users from a public API (https://jsonplaceholder.typicode.com/users) and includes:

Clean, modern, responsive UI

Single search bar with dropdown filter (Name / Company)

Paginated user cards (9 per page)

Modal popup for detailed user info

Scroll-to-top floating button

Glassmorphism card design + smooth hover effects

🔗 GitHub Repository

The project is hosted publicly on GitHub:

https://github.com/aditiz11/brokod-users

Recruiters can clone the repo and run it locally.

✨ Features

Responsive Grid Layout: Cards adapt to screen size

Search & Filter: Filter users by Name or Company with a single search bar

Pagination: Shows 9 user cards per page

Modal Details: View phone, website, address, and company details

Scroll-to-Top Button: Smooth scrolling back to top

Modern UI: Glassmorphism effect and hover animations

📸 Screenshots

User Directory Page:

<img width="1920" height="1020" alt="Screenshot 2025-12-11 195343" src="https://github.com/user-attachments/assets/d04e2113-1bb6-4cb1-8bca-c47f4c87a5a8" />


Modal View:
<img width="1920" height="1020" alt="Screenshot 2025-12-11 195409" src="https://github.com/user-attachments/assets/6923cddd-f6c4-4a37-a939-3fa19357be8a" />


Pagination & Scroll-to-Top:
<img width="1920" height="1020" alt="Screenshot 2025-12-11 195356" src="https://github.com/user-attachments/assets/bcd17b53-93c0-4aac-9652-0c0a590550a0" />


⚡ Installation Instructions

Clone the repository:

git clone https://github.com/YOUR_USERNAME/brokod-users.git
cd brokod-users


Install dependencies:

npm install


Run the development server:

npm run dev


Open http://localhost:5173
 in your browser (Vite default)

If using Create React App (CRA), run npm start instead

🗂 Project Structure
brokod-users/
 ├─ src/
 │   ├─ components/
 │   │   ├─ UserCard.jsx
 │   │   ├─ UserModal.jsx
 │   ├─ App.jsx
 │   ├─ App.css
 │   └─ main.jsx
 ├─ package.json
 └─ README.md

🛠 Technologies Used

React.js (functional components + hooks)

HTML5 & CSS3

Fetch API for network requests

Vite (or CRA) for project setup

Git & GitHub for version control

🚀 Optional Deployment

You can deploy this project using GitHub Pages:

Install gh-pages:

npm install gh-pages --save-dev


Add deploy scripts in package.json

Build & deploy:

npm run build
npm run deploy

💡 Future Improvements

Add skeleton loaders for better UX

Implement debounced search for faster filtering

Add dark/light theme toggle

Animate modal and cards using Framer Motion

Add unit tests for components

👤 Author

Your Name – Aditi

GitHub: https://github.com/aditiz11
