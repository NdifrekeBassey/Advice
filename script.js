// Function to fetch advice from the API
function fetchAdvice() {
    // Make a GET request to the Advice Slip API
    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            // Extract the advice text and advice number from the API response
            const advice = data.slip.advice;
            const adviceNumber = data.slip.id;
            
            // Update the advice text in your HTML
            const adviceTextElement = document.querySelector('.v1_57');
            adviceTextElement.textContent = `“${advice}”`;

            // Update the advice number in your HTML
            const adviceNumberElement = document.querySelector('.advice-number');
            adviceNumberElement.textContent = `ADVICE #${adviceNumber}`;
        })
        .catch((error) => {
            console.error('Error fetching advice:', error);
        });
}

// Attach a click event listener to the dice icon
const diceIcon = document.querySelector('.dice-icon');
diceIcon.addEventListener('click', fetchAdvice);

// Initial advice fetch (when the page loads)
fetchAdvice();
