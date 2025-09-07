const quotes = [
  "🏥 AI is helping doctors detect cancer and heart diseases earlier than traditional methods.",
  "🚗 Self-driving cars use AI to process data from cameras, radar, and LiDAR in real-time — reacting faster than most humans.",
  "🎥 AI Video Makers can now turn text prompts into videos, a task that once took big studios weeks to complete.",
  "🧮 The Calculator is the oldest digital tool on this list — the first electronic calculators appeared in the 1960s and were bigger than laptops!",
  "Code today, rule tomorrow 👨‍💻"
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];