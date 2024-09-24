const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can achieve it."
];

document.getElementById('new-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
});

document.getElementById('tweet-quote').addEventListener('click', () => {
    const quote = document.getElementById('quote').innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(tweetUrl, '_blank');
});
