// let text = "Lorem ipsum is a dummay text" // text is a string variable

// Extracting String Characters

// let textLength = text.length
// console.log(`text length is: ${textLength}`);

// let char = text.charAt(4)
// console.log(char);

// let charCode = text.charCodeAt(4);
// console.log(charCode);

// let at = text.at(2)
// console.log(at);

// let charAt = text[3]
// console.log(charAt);

// String slice methods
// let text = "Apple, Banana, Kiwi";

// let part = text.slice(0,-14)
// console.log(part);

// let strPart = text.substring(7,13) // start count index 7 till index 13
// let strPart = text.substring(7) // apparing rest of the stiring after index 7 (from index 8)
// let strPart = text.substr(7, 6) // starting from index 8 will counting length till 6 character
// let strPart = text.substr(7, 5)

// console.log(strPart);

// Converting to Upper and Lower Case

// let text = "Apple, Banana, Kiwi";
// let textUpper = text.toUpperCase()
// let textlower = text.toLowerCase()

// console.log(textlower);

// let apple = "Apple";
// let banana = "Banana";
// let kiwi = "Kiwi";

// let fruits = apple.concat(", ",banana,", ",kiwi) // concating multiple string
// console.log(fruits);
// let text = "          Apple, Banana, Kiwi        ";
// let length = text.length
// let removeSpace = text.trim()
// let removeSpace = text.trimStart()
// let removeSpace = text.trimEnd()
// console.log(removeSpace);
// console.log(text);

// let text = "5"
// let padded = text.padStart(4,'0')
// let padded = text.padEnd(4,'0')
// console.log(padded);

let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// let index = text.search("where");
// let index = text.match("loc");
// let index = text.includes("locate");
// let index = text.startsWith("locate",7);
let index = text.replace("locate", "place");
console.log(index);