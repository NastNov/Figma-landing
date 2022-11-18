
const img = document.querySelector('.img');
const city = document.getElementById('projects_city');
const time = document.getElementById('projects_time');
const area = document.getElementById('projects_area');

const entities = [
    {
      city: 'Rostov-on-Don\nLCD admiral',
      time: '3.5 months',
      area: '81 m2',
      img: 'images/second-image.jpg'
    },
    {
      city: 'Sochi\nThieves',
      time: '4 months',
      area: '105 m2',
      img: 'images/slider-photo-2.jpg'
    },
    {
      city: 'Rostov-on-Don\nPatriotic',
      time: '3 months',
      area: '93 m2',
      img: 'images/slider-photo-3.jpg'
    }
  ];

const setEntity = (index) => {
  city.innerText = entities[index].city;
  time.innerText = entities[index].time;
  area.innerText = entities[index].area;
  img.src = entities[index].img;
};

const prev = document.querySelector('.vectorleft');
const next = document.querySelector('.vectorright');
const firstDot = document.querySelector('.dot1');
const secondDot = document.querySelector('.dot2');
const thirdDot = document.querySelector('.dot3');

let currentIndex = 0;

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
  } else {
  setEntity(currentIndex = 2);
  };
});

next.addEventListener('click', () => {
  if (currentIndex < 2) {
  setEntity(currentIndex + 1);
  currentIndex += 1;
  } else {
  setEntity(currentIndex = 0);
  };
});

firstDot.addEventListener('click', () => {
  setEntity(currentIndex = 0);
});

secondDot.addEventListener('click', () => {
  setEntity(currentIndex = 1);
});

thirdDot.addEventListener('click', () => {
  setEntity(currentIndex = 2);
});

const firstName = document.getElementById('firstlink');
const secondName = document.getElementById('secondlink');
const thirdName = document.getElementById('thirdlink');

firstName.addEventListener('click', () => {
  setEntity(currentIndex = 0);
});

secondName.addEventListener('click', () => {
  setEntity(currentIndex = 1);
});

thirdName.addEventListener('click', () => {
  setEntity(currentIndex = 2);
});
