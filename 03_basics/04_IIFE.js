// Immediately invoked function expression

// named iife function
(function funcOne() {
    console.log(`DATABASE SUCCESSFULLY CONNECTED`);
})();

// iife function
((name) => {
    console.log(`DATABASE SUCCESSFULLY CONNECTED TWO ${name}`);
})("Ratul Khan");