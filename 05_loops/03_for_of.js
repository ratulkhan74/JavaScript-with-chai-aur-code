const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (const number of numbers) {
    // console.log(number,'is the number');
}

// for of loop in string
const greetings = 'Hello world'
for (const greet of greetings) {
    // console.log(greet);
}

// looping in a map object
// const languages = new Map()
// languages.set('js', 'javascript')
// languages.set('cpp', 'C++')
// languages.set('php', 'php')
// languages.set('java', 'Java')

// for (const [lang, value] of languages) {
// console.log(`${lang} = ${value}`);
// }

// Looping in object
const programingLang = {
    js: 'javascript',
    cpp: 'C++',
    php: 'php',
    java: 'Java'
}
for (const lang in programingLang) {
    // console.log(programingLang[lang]);
}
// for in loop in an array
const pLangs = ["JavaScript","PHP","HTML","CSS","Bootstrap"]
if(Array.isArray(pLangs)){
    for(const lang in pLangs){
        const value = pLangs[lang] 
        console.log(`${lang} is the index of ${value}`);
    }
}

// Note: For-In Loop for Iterating (looping) Through Objects
// Note: For-of Loop for Iterating (looping) Through Array
