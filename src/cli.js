import readlineSync from "readline-sync";

function sayHelloToUser() {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`)
}

export { sayHelloToUser };
