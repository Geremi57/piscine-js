export const getLetter = function () {
    const alphabetStart = 65;
    const totalLetters = 26;

    const randomInd =
        Math.floor(Math.random() * totalLetters);

    const randomAsc =
        alphabetStart + randomInd;

    const randomLet =
        String.fromCharCode(randomAsc);

    return randomLet;
};

export const generateLetters = function () {
    const totalLet = 120;

    for (let i = 0; i < totalLet; i++) {
        const letter = document.createElement("div");
        
        const randomLet =getLetter();
        
        letter.textContent =randomLet;
        const font = i + 11;
        
        letter.style.fontSize = font + "px";

        if (i < 40) {
            letter.style.fontWeight ="300";
        }

        else if (i < 80) {
            letter.style.fontWeight ="400";
        }

        else {
            letter.style.fontWeight = "600";
        }
        document.body.appendChild(letter);
    }
};