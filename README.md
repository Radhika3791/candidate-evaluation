# candidate-evaluation
# Candidate Response Evaluation System

## 🎯 Objective
Automatically evaluate candidate answers and generate meaningful feedback including:

- Score
- Strengths
- Weaknesses
- Feedback

---

## 📌 Project Description

The Candidate Response Evaluation System is a simple web application built using HTML, CSS, and JavaScript. It evaluates candidate responses based on predefined criteria and provides a score along with strengths, weaknesses, and feedback.

The system also handles edge cases such as empty responses and very short answers to ensure consistent evaluation.

---

## 🚀 Features

- Evaluate candidate responses
- Generate score out of 10
- Identify strengths
- Identify weaknesses
- Provide feedback
- Handle empty responses
- Handle very short answers
- User-friendly interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

---

## 📂 Project Structure

```text
candidate-evaluation/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How to Run

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` using Live Server or any web browser.
4. Enter a candidate response.
5. Click the **Evaluate Response** button.
6. View the generated score, strengths, weaknesses, and feedback.

---

## 📊 Evaluation Criteria

| Score Range | Evaluation |
|------------|------------|
| 0 - 2 | Poor |
| 3 - 4 | Weak |
| 5 - 6 | Average |
| 7 - 8 | Good |
| 9 - 10 | Excellent |

---

## 🔍 Edge Cases Handled

### Empty Response

Input:

```text
""
```

Output:

```json
{
  "score": 0,
  "feedback": "No response provided."
}
```

### Very Short Response

Input:

```text
"API"
```

Output:

```json
{
  "score": 2,
  "feedback": "Answer is too short to evaluate properly."
}
```

---

## 💡 Example Output

```json
{
  "score": 8,
  "strengths": [
    "Relevant response",
    "Shows understanding of the topic"
  ],
  "weaknesses": [
    "Could include more detailed explanation"
  ],
  "feedback": "Good answer. Consider adding examples and more detailed explanations."
}
```

---

## ✅ Deliverables Achieved

- Candidate response evaluation
- Score generation
- Strength analysis
- Weakness analysis
- Feedback generation
- Empty response handling
- Short response handling
- Consistent output format

---

## 👩‍💻 Author

Radhika Gudimetta
