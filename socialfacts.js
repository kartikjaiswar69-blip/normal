const quotes = [
  "💬 WhatsApp was bought by Facebook in 2014 for $19 billion, one of the largest tech acquisitions ever.",
  "Twitter (now X) was originally going to be called “Twttr”, inspired by Flickr and SMS short codes.",
  "📘 Facebook was first created only for Harvard students in 2004 before expanding to the public.",
  "💼 LinkedIn has users in 200+ countries, making it the most global professional network.",
  "👻 Snapchat streaks are so popular that many users log in daily just to keep them alive."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];