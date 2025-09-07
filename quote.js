const quotes = [
  "One click can save your time 🚀",
  "Stay focused, stay sharp! 💡",
  "Great things start with small clicks 🔑",
  "Consistency beats intensity. 🔥",
  "Code today, rule tomorrow 👨‍💻"
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];