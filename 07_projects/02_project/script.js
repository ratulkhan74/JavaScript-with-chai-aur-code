const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Preventing default behavior
    // Getting value from inputs
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // Result
    const result = document.querySelector('#result');

    // Checking user provider value
    if (isNaN(height) && isNaN(weight)) {
        result.innerHTML = `Height and weight Cannot be empty!`;
    } else if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height!`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight!`;
    } else {
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // BMI Condition
        if (bmi < 18.6) {
            result.innerHTML = `<span>Body Mass Index is ${bmi} consider under weight</span>`
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `<span>Body Mass Index is ${bmi} consider normal weight</span>`
        } else {
            result.innerHTML = `<span>Body Mass Index is ${bmi} consider overweight </span>`
        }
    }



})