
function function2(){
  var name = 'phil'
  return 'loud noises2';
};

var function1 = function(){
  gym = '24 hour'
  return 'loud noises';
};

var bobsName = 'Bob';
var bobsAge = '24';


var janet = {
  name: 'Janet',
  age: 24
}


janet.sayHi = function(name){
}

janet.sayHi(janet.name);
janet.sayHi(bobsName);

var Person = function(name, age, cohort){
  this.name = name;
  this.age = age;
  this.cohort = cohort;
  this.specialCohor = cohort;
  this.thingaDoodle = function(){
    //kilobytes of behavior
  }
};

Person.prototype.battlecries = {
  squirrel: "Who runs the world? Squirrels!",
  sealion: "arf arf arf!",
  fiddlerCrab: "What do we have? Crabs!",
  chorsFrog: "ribbit ribbit",
};

Person.prototype.battlecry = function(){
  if(this.battlecries[this.cohort] !== undefined){
    return this.battlecries[this.cohort]
  } else{
    return "We were too boring to have a battlecry";
  }
}

var soren = new Person('Soren', 19, 'squirrel')
var matt = new Person('Matt', 19, 'desertRabbit')

var things = ['fig', 'pig', 'wig', 'jam']

for(var i = 0; i<things.length; i++){
}

for(key in Person.prototype.battlecries){
}

