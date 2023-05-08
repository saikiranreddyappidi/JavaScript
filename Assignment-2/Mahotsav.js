// Get all the Register buttons on the page
const buttons = document.querySelectorAll('button');

// Loop through the buttons and add a click event listener to each one
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Thank you for registering!');
  });
});

