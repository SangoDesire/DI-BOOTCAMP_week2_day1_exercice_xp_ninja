let userNumber = prompt("Entrer un nombre");

if (userNumber <= 2) {
    console.log("Boom");
} else {
    if (userNumber % 2 == 0 && userNumber % 5 == 0) {
        let word = "B"
        for (let i = 0; i < userNumber; i++) {
            word += "o";
        }
        word += "m!"
        console.log(word);
    } else {
        if (userNumber % 5 == 0) {
            let word = "B"
            for (let i = 0; i < userNumber; i++) {
                word += "o";
            }
            word += "m"
            console.log(word);
        } else {
            if (userNumber % 2 == 0) {
                let word = "B"
                for (let i = 0; i < userNumber; i++) {
                    word += "o";
                }
                word += "m!"
                console.log(word);
            } else {
                let word = "B"
                for (let i = 0; i < userNumber; i++) {
                    word += "o";
                }
                word += "m"
                console.log(word);
            }
        }
    }
}