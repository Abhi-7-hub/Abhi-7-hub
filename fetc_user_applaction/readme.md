# 👤 User Cards Fetch Project

This project displays dynamic user profile cards fetched from a public API using JavaScript, HTML, and CSS. Each card shows user information like name, email, address, phone, website, and company details.

---

## 🚀 Features

- Fetches user data from an API (`https://jsonplaceholder.typicode.com/users`)
- Dynamically generates user cards using JavaScript
- Clean and responsive card layout using custom CSS
- All cards are generated based on API data (10 cards total)

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Public REST API (JSONPlaceholder)

---

## 📁 Folder Structure


---

## 📸 UI Overview

Each card includes:

- 👤 Name and Username
- 📧 Email
- 📞 Phone number
- 🌐 Website (clickable)
- 📍 Address (Street, City, Zipcode)
- 🏢 Company name and catchphrase

---

## 🧠 How It Works (Step-by-Step)

### 1. Fetching User Data
The app uses the `fetch()` method to get data from:

### 2. Parsing JSON
Once the data is fetched, it is converted into usable JavaScript objects using `.json()`.

### 3. Dynamic Card Creation
For each user object:
- A `<div>` with class `card` is created
- Inner content (name, email, etc.) is filled dynamically using template literals
- The card is appended to the `.cards-wrapper` container in the HTML

### 4. Styling with CSS
Each card is styled to be clean, readable, and responsive using custom CSS rules:
- Box-shadow for depth
- Flex/grid layout
- Hover effects

---

## 🔧 Setup Instructions

1. Clone or download the project
2. Open `index.html` in your browser
3. You'll see 10 beautifully styled user cards!

---

## 📦 API Source

- JSONPlaceholder: https://jsonplaceholder.typicode.com/users

---

## 🙌 Author

Made by **Abhishek Pratap Singh** | MERN Stack Learner 💻

---

## 📌 Screenshot (Optional)

> You can add a screenshot image of the UI here to show a preview.

