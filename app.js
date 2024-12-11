// Hardcoded array of joke objects
// Each joke object has a unique id
const jokes = [
  {
    id: "A1bC2D",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  },
  {
    id: "E3fG4H",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: "I5jK6L",
    joke: "Why don't skeletons fight each other? They don't have the guts.",
  },
  {
    id: "kH9pZU",
    joke: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: "L8nK5M",
    joke: "What do you call a fake noodle? An impasta!",
  },
  {
    id: "P9qR4N",
    joke: "Why don't eggs tell jokes? They'd crack up!",
  },
  {
    id: "T6vW2X",
    joke: "What do you call a sleeping bull? A bulldozer!",
  },
  {
    id: "Y7mB8K",
    joke: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
  },
  {
    id: "Q4sJ9H",
    joke: "What do you call a bear without ears? B!",
  },
  {
    id: "G5fD3L",
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  },
  {
    id: "C2xZ7V",
    joke: "What do you call a pig that does karate? A pork chop!",
  },
  {
    id: "W8tN4M",
    joke: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: "E1yH6B",
    joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  },
];

/* TASK:
-Instead of using hard-coded jokes, we need to retrieve a random joke
from the dadJokes API, and incorporate these in the HTML rendering.
-Function 1 and 3 can stay the same (for the most part)
-Mainly looking to change function 2

TASK 1:
Fetch the API from the given endpoint. CHECK
TASK 2:
Process the API response so that we only get the joke as a string.
TASK 3:
Display that string in our HTML joke card (this is already done for us, so we would only need to update the return value of retrieveJoke())


*/

// 1 - Main function to retrieve and display a new joke
async function getAndDisplayNewJoke() {
  const joke = await retrieveJoke();
  displayJoke(joke);
}

// 2 - Function to retrieve a random joke
async function retrieveJoke() {
  try {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    let data = await response.json();
    let extractedJoke = data.joke;
    console.log(extractedJoke);
    return extractedJoke;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// 3 - Function to update the DOM with the provided joke
function displayJoke(argument) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = argument;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);
