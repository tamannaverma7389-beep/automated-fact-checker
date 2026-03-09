# 🔎 Automated Fact-Checker for Vernacular News

## 📌 Project Overview

Misinformation spreads rapidly on social media platforms. Human fact-checkers cannot keep up with the massive volume of posts.

This project builds a **scalable AI-inspired pipeline** that monitors news or social media posts and cross-references them with a **database of verified facts** to detect misinformation quickly.

The system uses **pipeline optimization** to remove conversational noise from posts before verification, improving processing speed and accuracy.

---

# 🚀 Features

✅ Fact verification system  
✅ MongoDB verified fact database  
✅ Pipeline optimization (text cleaning)  
✅ Social media post processing  
✅ Misinformation detection  
✅ Result storage for analysis  
✅ Simple web interface for testing  

---

# 🧠 System Architecture


User / Social Media Post
│
▼
Text Optimization
(remove conversational noise)
│
▼
Fact Retrieval
(MongoDB Verified Facts)
│
▼
Verification Engine
(match claims with facts)
│
▼
Misinformation Detection
(True / False / Unverified)
│
▼
Store Results
(MongoDB posts collection)


---

# ⚙️ Tech Stack

| Technology | Purpose |
|------------|--------|
Node.js | Backend runtime |
Express.js | Web server |
MongoDB | Fact database |
Mongoose | MongoDB ORM |
HTML/CSS | Frontend interface |

---

# 📂 Project Structure


automated-fact-checker
│
├── config
│ └── db.js
│
├── models
│ ├── Fact.js
│ └── Post.js
│
├── routes
│ └── factRoutes.js
│
├── controllers
│ └── factController.js
│
├── services
│ ├── optimizer.js
│ └── verifier.js
│
├── scripts
│ └── loadFacts.js
│
├── public
│ ├── index.html
│ └── style.css
│
├── server.js
├── package.json
└── README.md


---

# 🗄 Database Structure

## Facts Collection


{
claim: "5g spreads coronavirus",
truth: "False",
source: "WHO"
}


## Posts Collection


{
text: "Drinking hot water cures covid",
cleanedText: "drinking hot water cures covid",
result: "False",
createdAt: "2026-03-09"
}


---

# ⚡ Pipeline Optimization

Social media posts often contain **noise words** like:


"Guys please listen!! This is breaking news!!"


The optimizer removes these before verification.

Example:

Input:


Guys please listen! Drinking hot water cures covid!


Optimized:


drinking hot water cures covid


This improves **throughput and verification accuracy**.

---

# 🛠 Installation

Install dependencies


npm install


---

# ▶ Run Project

Start MongoDB first.

Load facts into database:


node scripts/loadFacts.js


Start server:


node server.js


Open browser:


http://localhost:3000


---

# 🧪 Example Test

Input:


5g spreads coronavirus


Output:


Result: False


---

# 📸 Frontend Interface

Example UI of the Fact Checker:

<img width="1270" height="714" alt="Screenshot 2026-03-09 203138" src="https://github.com/user-attachments/assets/433370bf-bea7-4bc8-911a-515b6626e66b" />


The interface allows users to enter a news claim and verify whether it is **True, False, or Unverified**.

---

# 🗄 MongoDB Database (mongosh)

Facts stored in MongoDB:
<img width="511" height="755" alt="Screenshot 2026-03-09 203307" src="https://github.com/user-attachments/assets/e5c55118-4535-4639-87d4-58a1ee339fc3" />


Example command used:


mongosh
use factchecker
db.facts.find()


This confirms that the system retrieves **verified facts from the database** during the verification process.

---

# 🎯 Future Improvements

- NLP similarity matching
- Real-time social media monitoring
- Multilingual vernacular fact checking
- Machine learning misinformation detection

---

# 📜 License

This project is for **educational purposes**.

---

# 👨‍💻 Author

Developed as part of **AI Fact-Checking Pipeline Project**.


Open

http://localhost:3000

Screenshot:

AI Fact Checker UI
Input box
Check Fact button
Result: False

Save as:

screenshots/frontend.png
2️⃣ MongoDB

In terminal:

mongosh
use factchecker
db.facts.find()


