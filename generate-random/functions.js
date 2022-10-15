function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomString(stringLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789^%';
    let result = '';
    for (let i = 0; i < stringLength; i++) {
        result += characters.charAt(randomNumber(0, characters.length - 1));
    }
    return result;
}


function randomArray(min, max, arrayLength) {
    let result = Array.from({ length: arrayLength }, () => Math.floor(Math.random(min) * max + 1))
    return result;
}
export default { randomNumber, randomString, randomArray }
