class Animal {
  constructor(callback) {
    this.callback = callback;
  }

  move (){
    this.callback && this.callback();
  }
}

const human = new Animal(() => console.log('running!'));
const bird = new Animal(() => console.log('flying!'));
const fish = new Animal(() => console.log('swimming!'));

human.move(); // running!
bird.move(); // flying!
fish.move(); // swimming!