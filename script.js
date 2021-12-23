const union = document.querySelector('#union');
const dropDown = document.querySelector('.hamburger');
const xicon = document.querySelector('#xicon');
const speakers = document.querySelector('#speakers');
const downArrowaBtn = document.querySelector('#more');
const upArrowBtn = document.querySelector('#lessarrowbtn');
const restOfImages = document.querySelector('.restofimages');

const speakersArr = [
  {
    image: './images/timcook.png',
    name: 'Tim Cook',
    title: 'Tim is the CEO of Apple',
    description:
      'Tim Cook is the CEO of Apple and serves on its board of directors',
  },
  {
    image: './images/jeff.jpeg',
    name: 'Jeff Bezos',
    title: 'Tim is the CEO of Apple',
    description:
      'Jeff Bezos founded e-commerce giant Amazon in 1994 out of his garage in Seattle.',
  },
  {
    image: './images/billgates.jpeg',
    name: 'Bill Gates',
    title: 'Tim is the CEO of Apple',
    description: 'Bill Gates is the CEO of Microsoft and Xbox.',
  },
  {
    image: './images/warren.jpeg',
    name: 'Warren Buffet',
    title: 'Tim is the CEO of Apple',
    description: 'Warren Buffet the master of all Real Estate Business',
  },
];

for (let i = 0; i < speakersArr.length; i += 1) {
  restOfImages.innerHTML += `<div class="featured timcook">
  <div class="checkers">
  <img src="${speakersArr[i].image}" alt="timcook img" id="images" />
  </div>
  
  <div class="timcontent">
    <h2>${speakersArr[i].name}</h2>
    <h3>
      ${speakersArr[i].title}
      <p class="thinline"></p>
    </h3>

    <p>
      ${speakersArr[i].description}
    </p>
  </div>
</div>`;
}

union.addEventListener('click', () => {
  dropDown.style.display = 'flex';
});

xicon.addEventListener('click', () => {
  dropDown.style.display = 'none';
});

speakers.addEventListener('click', () => {
  dropDown.style.display = 'none';
});

downArrowaBtn.addEventListener('click', () => {
  document.querySelectorAll('.restofimages > div').forEach((x) => {x.style.display = 'flex'});
  downArrowaBtn.style.display = 'none';
  upArrowBtn.style.display = 'block';
});

upArrowBtn.addEventListener('click', () => {
  document.querySelectorAll( '.restofimages > div:not(:first-child):not(:nth-child(2))').forEach((x) => { x.style.display = 'none';});
  upArrowBtn.style.display = 'none';
  downArrowaBtn.style.display = 'block';
});
