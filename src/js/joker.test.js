import { dadJoke } from "./joker.js";

export async function testDadJoke() {
    const joke = await dadJoke();
    const testPasses = Boolean(Joke);
    console.log(joke);
    console.log("Dad Joke Test:", testPasses ? "PASSED" : "FAILED");
    return testPasses;
}

testDadJoke(); 