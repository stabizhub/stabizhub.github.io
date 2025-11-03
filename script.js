
document.getElementById('year').textContent = new Date().getFullYear();
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value || 'Friend';
    const message = document.getElementById('msg').value || 'Hello, I want to inquire.';
    const text = encodeURIComponent(`Hi STA Rentals 👋🏽. My name is ${name}. ${message}`);
    window.open(`https://wa.me/2347087349197?text=${text}`, '_blank');
  });
}
