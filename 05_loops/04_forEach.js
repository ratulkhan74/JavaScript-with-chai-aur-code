const pLangs = ["JavaScript", "PHP", "HTML", "CSS", "Bootstrap"]

// pLangs.forEach((lang, index) => {
//     console.log(`index is ${index} and value is ${lang}`);
// })

// function languageCallback(element) {
//     console.log(element);
// }
// pLangs.forEach(languageCallback)

const languages = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Hypertext preprocessor",
        languageFile: "php"
    },
    {
        languageName: "HyperText Markup Language",
        languageFile: "html"
    }
]

languages.forEach((language)=>{
    console.log(language.languageName);
})