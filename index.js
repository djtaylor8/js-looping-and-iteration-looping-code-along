function writeCards(names, occasion) {
    let greeting = [];
    for (let i = 0; i < names.length; i++) {
        greeting.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return greeting;
}

function countDown(int) {
    let i = int 
    while (i >= 0) {
        console.log(i)
        i--;
    }
}
