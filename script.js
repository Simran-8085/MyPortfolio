document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // You can send this data to a backend or an email API
  document.getElementById("formMessage").textContent = `Thank you, ${name}! I’ll get back to you soon.`;
  this.reset();
});
