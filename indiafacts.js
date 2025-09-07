const quotes = [
  "💧 The Shampoo was invented in India — the word comes from the Hindi word “champu”.",
  "🚖 In Mumbai, the dabbawalas (lunchbox delivery men) have an error rate of less than 1 in 6 million deliveries!",
  "🐒 Varanasi is considered one of the oldest living cities in the world, over 3,000 years old.",
  "📜 India has the world’s longest written Constitution, with more than 465 articles in 25 parts and 12 schedules.",
  "🗳️ The Electronic Voting Machine (EVM), now used widely, was first tested in India in 1982 in Kerala."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];