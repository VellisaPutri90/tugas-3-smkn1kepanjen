const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
  
  const isLightMode = bodyHalaman.classList.toggle('light-mode');

  if (isLightMode) {
    btnTema.textContent = '🌙 Mode Gelap';
  } else {
    btnTema.textContent = '☀ Mode Terang';
  }
});


const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
  event.preventDefault(); 
  elemenModal.classList.add('show'); 
});

btnTutupModal.addEventListener('click', function () {
  elemenModal.classList.remove('show'); 
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    elemenModal.classList.remove('show');
  }
})

function updateGreeting() {
  const greetingElemen = document.getElementById('greeting');
  if (!greetingElemen) return;

  const currentHour = new Date().getHours();
  let greetingText = '';
  
  if (currentHour >= 5 && currentHour < 12) {
    greetingText = 'Selamat Pagi';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingText = 'Selamat Sore';
  } else {
    greetingText = 'Selamat Malam';
  }

  greetingElemen.textContent = greetingText;
}

updateGreeting();

const avatarIcon = document.querySelector('.avatar-icon');

if (avatarIcon) {
  avatarIcon.addEventListener('click', () => {
    avatarIcon.classList.add('spin-once');

    avatarIcon.addEventListener('animationend', () => {
      avatarIcon.classList.remove('spin-once');
    }, { once: true });
  });
}

