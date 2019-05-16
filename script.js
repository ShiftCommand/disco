  
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = '#A5F2F3';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);