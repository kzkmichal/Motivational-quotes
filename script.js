const quotesContent = document.querySelectorAll("p");
const authorsName = document.querySelectorAll("h3");
const quoteButton = document.querySelector(".buttons__quotes");
const imageButton = document.querySelector(".buttons__picture");
const contexQuotes = document.querySelectorAll(".context__quotes");
const context = document.querySelector(".context");
const images = document.querySelectorAll(".image");

const quoteslist = {
    1: {
        quote: "I have not failed. I've just found 10,000 ways that won't work",
        author: "Thomas A. Edison"
    },
    2: {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    3: {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    4: {
        quote: "All our dreams can come true, if we have the courage to pursue them",
        author: "Walt Disney"
    },
    5: {
        quote: "Have the courage to follow your heart and intuition. They somehow already know what you truly want to become",
        author: "Steve Jobs"
    },
    6: {
        quote: "Sooner or later  even the fastest runners have to stand and fight",
        author: "Stephen King"
    },
    7: {
        quote: "The most common way people give up their power is by thinking they don't have any",
        author: "Alice Walker"
    },
    8: {
        quote: "Great works are performed not by strength but by perseverance",
        author: "Samuel Johnson"
    }
};

const quoteArr = Object.values(quoteslist);
console.log(quoteArr.length);
let change = () => {
    const count = Math.floor(Math.random() * quoteArr.length);

    quotesContent.forEach(quoteContent => {
        quoteContent.textContent = quoteArr[count].quote;
    });
    authorsName.forEach(author => {
        author.textContent = quoteArr[count].author;
    });
};

const nextQuote = () => {
    const slider = document.querySelector(".slide");
    slider.classList.remove("slide");
    if (slider.nextElementSibling) {
        slider.nextElementSibling.classList.add("slide");
    } else {
        contexQuotes[0].classList.add("slide");
    }
};

quoteButton.addEventListener("click", change);
quoteButton.addEventListener("click", nextQuote);

const delay = () => {
    imageButton.disabled = true;
    setTimeout(() => {
        imageButton.disabled = false;
    }, 2000);
};

imageButton.addEventListener("click", delay);

imageButton.addEventListener("click", () => {
    let topImage = document.querySelector(".top");
    topImage.classList.remove("top");
    if (topImage.nextElementSibling) {
        topImage.nextElementSibling.classList.add("top");
    } else {
        images[0].classList.add("top");
    }
});