const search = document.getElementById('q');
const button = document.querySelector('.button');
const form = document.getElementById('form');
const google = document.querySelector('.g');
const dgo = document.querySelector('.d');
const toggle = document.querySelector('.toggle');
const gimg = document.querySelector('.google');
const dimg = document.querySelector('.duckduckgo');

button.addEventListener('click', () => {
  if (search.hasAttribute('disabled')) {
    search.removeAttribute('disabled');
    search.classList.add('active');
    search.focus();
  } else {
    search.setAttribute('disabled', '');
    search.classList.remove('active');
  }
});

dgo.addEventListener('click', () => {
  toggle.classList.add('duck');
  dimg.classList.remove('hidden');
  gimg.classList.add('hidden');
  form.action = 'https://duckduckgo.com/';
});

google.addEventListener('click', () => {
  toggle.classList.remove('duck');
  gimg.classList.remove('hidden');
  dimg.classList.add('hidden');
  form.action = 'https://www.google.com/search';
});
