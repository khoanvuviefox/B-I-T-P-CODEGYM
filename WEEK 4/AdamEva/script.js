function Apple (weight=10) {
    this.weight = weight;
  
    this.isEmpty = false;
    this.decrease = function() {
      this.weight--;
    }
    this.getWeight = function() {
      console.log(`Apple weight: ${this.weight}`);
      return this.weight;
    }
  } 
  
  function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
  
    this.getWeight = function() {
      console.log(`${this.name} Weight: ${this.weight}`);
      return this.weight;
    }
    this.setWeight = function(wet) {
      this.weight = wet;
    }
    this.eat = function(apple) {
      apple.decrease();
    }
    this.say = function(string) {
      document.getElementById('say').innerHTML += (`${this.name} say: "${string}" <br>`);
    }
    this.checkApple = function(apple) {
      return apple.getWeight();
    }
  }
  
  const adam = new Human('Adam', 'male', 100);
  const eva = new Human('Eva', 'female', 50);
  const apple = new Apple();
  let isAdamNext = true;
  
  document.getElementById('eatBtn').addEventListener('click', () => {
    if (!apple.isEmpty) {
      if (isAdamNext) {
        adam.eat(apple);
        adam.setWeight(++adam.weight);
        
        if (!adam.checkApple(apple)) {
          adam.say('Để anh rút kiếm ra!');
          apple.isEmpty = true;
        } else {
          adam.say('Em ăn đấm hay ăn cối đây?');
        }
        isAdamNext = false;
      } else {
        eva.eat(apple);
        eva.setWeight(++eva.weight);
        
        if (!eva.checkApple(apple)) {
          eva.say('Em muốn ăn chuối của anh phải không?');
          apple.isEmpty = true;
        } else {
          eva.say('Anh ăn em đi! Ư Ư');
        }
        isAdamNext = true;
      }
    }
  })