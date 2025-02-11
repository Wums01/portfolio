document.querySelector('.cta-button').addEventListener('click', () => {
  alert('Check out my projects below!');
}); 

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value; 
  const message = document.getElementById('message').value

  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear the form after submission
  e.target.reset();
});