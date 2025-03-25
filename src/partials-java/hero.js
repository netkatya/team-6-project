document.addEventListener('DOMContentLoaded', function () {
  const bgDiv = document.querySelector('.hero');
  const img = new Image();

  let bgImage = '/img/background-mob.webp'; // За замовчуванням десктоп
  const dpr = window.devicePixelRatio || 1; // Визначаємо щільність пікселів

  if (window.innerWidth <= 767) {
    bgImage =
      dpr >= 2 ? '/img/background-mob@2x.webp' : '/img/background-mob.webp';
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    bgImage =
      dpr >= 2 ? '/img/background-tab@2x.webp' : '/img/background-tab.webp';
  } else if (window.innerWidth >= 1280 && window.innerWidth <= 1439) {
    bgImage =
      dpr >= 2 ? '/img/background-desk@2x.webp' : '/img/background-desk.webp';
  } else {
    bgImage =
      dpr >= 2
        ? '/img/background-desk-big@2x.webp'
        : '/img/background-desk-big.webp';
  }

  img.src = bgImage;

  img.onload = function () {
    bgDiv.classList.add('loaded');
  };
});
