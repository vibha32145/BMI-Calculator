const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');  // Correct selection of the message element

    // Validate height and weight input
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please provide a valid height';
        message.innerHTML = ''; // Clear any previous message
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please provide a valid weight';
        message.innerHTML = ''; // Clear any previous message
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Corrected formula for BMI

        // Display the BMI result
        results.innerHTML = `<span> BMI: ${bmi}</span>`;

        // Determine BMI category and display the message
        let bmiMessage = '';
        if (bmi < 18.6) {
            bmiMessage = 'Underweight';
        } else if (bmi >= 18.6 && bmi < 24.9) {
            bmiMessage = 'Normal weight';
        } else if (bmi >= 24.9) {
            bmiMessage = 'Overweight';
        }

        // Display the BMI category message
        message.innerHTML = `<span>BMI category: ${bmiMessage}</span>`;
        message.style.color = 'white';
        message.style.marginLeft = '15%';  
      
        
    }
});