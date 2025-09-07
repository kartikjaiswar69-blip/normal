const quotes = [
  "🌐 Google's original name was Backrub before it became Google in 1997.",
  "🗺️ Google Maps covers over 220 countries and territories.",
  "📧 Gmail was launched on April 1, 2004 (April Fool's Day) — people thought it was a prank at first.",
  "🔍 Google Search processes over 8.5 billion searches every day — that’s more than the world’s population!",
  "🎮 Google Play launched in 2012, merging Android Market, Google Music, and eBookstore."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];