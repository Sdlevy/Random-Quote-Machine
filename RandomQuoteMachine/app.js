var quotes = [
"Life isn’t about getting and having, it’s about giving and being.",
"Whatever the mind of man can conceive and believe, it can achieve.",
"Strive not to be a success, but rather to be of value.",
"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
"I attribute my success to this: I never gave or took any excuse.",
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
}