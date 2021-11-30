function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;
  this.getHeroElement = function () {
      return '<img width="' + this.size + '"' +
          ' height="' + this.size + '"' +
          ' src="' + this.image + '"' +
          ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  };
  this.moveRight = function () {
      this.left += 30;
      console.log('ok: ' + this.left);
  };
  this.moveDown = function () {
      this.top += 30;
      console.log('ok: ' + this.top);
  };
  this.moveLeft = function () {
      this.left -= 30;
      console.log('ok: ' + this.left);
  }
  this.moveUp = function () {
      this.top -= 30;
      console.log('ok: ' + this.top);
  }
}
var hero = new Hero('doremon.png', 20, 30, 100);
function start() {
  if (hero.left < window.innerWidth - hero.size && hero.top == 20) {
      hero.moveRight();
  } else if (hero.left > window.innerWidth - hero.size && window.innerHeight - hero.size > hero.top) {
      hero.moveDown();
  } else if (window.innerHeight - hero.size < hero.top) {
      hero.moveLeft();
  }
  if (hero.left === 0) {
      hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}
start();
