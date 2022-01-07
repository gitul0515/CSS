class Animal {
  constructor(callback) {
    this.callback = callback;
  }

  move (){
    this.callback && this.callback();
  }
}

// 클래스에 전달한 함수들
function run () {
  console.log('running!');
}
function fly () {
  console.log('flying!');
}
function swim () {
  console.log('swimming!');
}

const human = new Animal(run);
const bird = new Animal(fly);
const fish = new Animal(swim);

human.move(); // running!
bird.move(); // flying!
fish.move(); // swimming!