import joker from 'give-me-a-joke';

// console.log(joker.getRandomJoke().body);

// joker.getRandomDadJoke(console.log);

export function dadJoke() {
    return new Promise(function (resolve, reject) {
        try {
          joker.getRandomDadJoke(function (joke) {
            resolve(joke);
          });
        } catch (error) {
          reject(error);
        }
  });
}
