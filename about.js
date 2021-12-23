const union = document.querySelector('#union');
const dropDown = document.querySelector('.hamburger');
const xicon = document.querySelector('#xicon');
const speakers = document.querySelector('#speakers');

union.addEventListener('click', () => {
  dropDown.style.display = 'flex';
});

xicon.addEventListener('click', () => {
  dropDown.style.display = 'none';
});

speakers.addEventListener('click', () => {
  dropDown.style.display = 'none';
});
