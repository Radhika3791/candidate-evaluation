function evaluateAnswer() {

    const answer = document.getElementById("answer").value.trim();

    let result;

    if (answer === "") {

        result = {
            score: 0,
            strengths: [],
            weaknesses: ["No response provided"],
            feedback: "No response provided."
        };

    } else if (answer.length < 15) {

        result = {
            score: 2,
            strengths: [],
            weaknesses: ["Answer is too short"],
            feedback: "Answer is too short to evaluate properly."
        };

    } else {

        let score = 5;

        if (answer.length > 50) score += 2;
        if (answer.length > 100) score += 1;
        if (answer.includes(".")) score += 1;

        if (score > 10) score = 10;

        result = {
            score: score,
            strengths: [
                "Relevant response",
                "Shows understanding of the topic"
            ],
            weaknesses: [
                "Could include more detailed explanation"
            ],
            feedback: "Good answer. Consider adding examples and more detailed explanations."
        };
    }

    document.getElementById("result").innerHTML = `
        <h3>Evaluation Result</h3>
        <p><strong>Score:</strong> ${result.score}/10</p>

        <p><strong>Strengths:</strong></p>
        <ul>
            ${result.strengths.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <p><strong>Weaknesses:</strong></p>
        <ul>
            ${result.weaknesses.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <p><strong>Feedback:</strong></p>
        <p>${result.feedback}</p>
    `;
}