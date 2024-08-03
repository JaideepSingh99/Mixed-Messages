//Generate a random number.
const randNum = (num) => {
    return Math.floor(Math.random() * num);
}

// Generate Random messages.
const randMessage = () => {
    const astroSign = ['Air sign', 'Water sign', 'Fire sign', 'Earth sign'];
    const react = ['Congrats', 'Sucks to be you', 'Meh', 'Hehe'];
    const meme = ["You'll die because of ligma!!", "You have a friend name Candice", "You like seeing CD."];

    const message = [];

    randAstro = astroSign[randNum(astroSign.length)];
    message.push(randAstro);
    randReact = react[randNum(react.length)];
    message.push(randReact);
    randmeme = meme[randNum(meme.length)];
    message.push(randmeme);

    return (`You're ` + message.join(' '));
}

console.log(randMessage());
