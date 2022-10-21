import joker from "give-me-a-joke";

// console.log(joker.getRandomJoke().body);

// joker.getRandomDadJoke(console.log);

export function dadJoke() {
    return new Promise(function(resolve, reject) {
      joker.getRandomDadJoke(resolve);
    })
  }

