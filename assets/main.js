var author = document.querySelector('.copyright > a');
var angular = 0;

setInterval(() => {
  author.style.filter = `hue-rotate(${angular}deg)`;
  angular += 20;
  if (angular === 360) angular = 0;
}, 500);

