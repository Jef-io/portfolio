import 'regenerator-runtime/runtime'

const sleep = (ms) => {
    return new Promise(resolve =>  setTimeout(resolve, ms))
}

const replaceChar = (string, char, index) => {
    const firstPart = string.substr(0, index);
    const lastPart = string.substr(index + 1);
      
    let newString = firstPart + char + lastPart;
    return newString;
}

const randomCharactersList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&é\"\'(-è_çà)[}]{";

const animateTransition = async (start, end) => {
    let wordAnimation = start;
    for (let i = 0; i < wordAnimation.length; i++) {
        wordAnimation = replaceChar(wordAnimation, randomCharactersList[Math.floor(Math.random() * randomCharactersList.length)], Math.floor(Math.random() * wordAnimation.length))
        document.getElementById('competences').innerHTML = wordAnimation;
        await sleep(50);
    }
    let charDifference = start.length - end.length;
    for (let i = 0; i < wordAnimation.length; i++) {
        if (charDifference < 0) {
            wordAnimation += randomCharactersList[Math.floor(Math.random() * randomCharactersList.length)];
            charDifference ++;
        }
        if (charDifference > 0) {
            wordAnimation = wordAnimation.slice(0, -1);
            charDifference --;
        }
        wordAnimation = replaceChar(wordAnimation, end.charAt(i), i);
        document.getElementById('competences').innerHTML = wordAnimation;
        await sleep(50);
    }
}

const competences = ['Web Apps', 'Websites', 'Front-end', 'Back-end'];
let competenceId = 0;

setInterval(() => {
    competenceId = (competenceId + 1) %4;
    animateTransition(competences[competenceId], competences[(competenceId + 1) % 4]);
}, 4000);