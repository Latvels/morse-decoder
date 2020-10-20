const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let result = "";

    while(expr.length >= 10) {

        let sliceString = expr.slice(0, 10);
        let keyObject = "";

        for (let i = 0; i <= 8; i += 2  ){            
            if (sliceString[i] === "*"){
                keyObject += " ";
                i = 9;
            } else if (sliceString[i] === "0"){
                keyObject += "";
            } else if (sliceString[i] === "1" && sliceString[i + 1] === "0"){
                keyObject += "."
            } else if (sliceString[i] === "1" && sliceString[i + 1] === "1"){
                keyObject += "-"
            }
            }

            if (keyObject !== " "){
                result += MORSE_TABLE[keyObject];
            } else {
                result += " ";
            }

            expr = expr.slice(10);
        }

        return result;
    }

module.exports = {
    decode
}
