// import joker from "one-liner-joke";

// console.log(joker.getRandomJoke().body);

import joker from "give-me-a-joke";

// joker.getRandomDadJoke(console.log);

export function dadJoke() {
    return new Promise(function(resolve, reject) {
      joker.getRandomDadJoke(resolve);
    })
  }

