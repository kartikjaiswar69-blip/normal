const quotes = [
  "🎥 The first movie ever made (Roundhay Garden Scene, 1888) was just 2.11 seconds long.",
  "📺 Netflix almost had the name “Kibble” before settling on Netflix.",
  "🍿 The world's longest movie ever made is 720 hours (30 days) long — it is called Logistics.",
  "⏱️ Every minute, more than 500 hours of video are uploaded to YouTube.",
  "▶️ YouTube was founded on February 14, 2005 - yep, Valentine's Day. 💘"
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];