// Where does inheritance in OOP struggle?
//Inheritance is structured around what it is i.e. what is x class?
// composition is structured around what it does to data. e.g. g(f(x * y))

// Tight coupling problem
// the coupling between a child and parent is very tight in OOP -- not great for reusability but can be a benefit in terms of keeping code dry. Changes ripple out
// Fragile base class problem --> easily afffected by its prototype.
// Hierarchy problem --> same thing essentially.

class Elf extends Character {
  constructor(name, weapon, type){
    super(name, weapon)
    console.log('What am I', this);
    this.type = type;
  }
}

// composition addresses these issues by using functions to remove methods from classes. e.g.
function getAttack(character) {
  return Object.assign({}, character, { attackFn: ()=>{}})
}
function elf(name, weapon, type) {
  let elf ={
    name,
    weapon,
    type
  }
  return getAttack(elf)
}


// Review:
// inheritance is a superclass that is extended to smaller pieces that extends or overwrites things
// composition is about smaller pieces that are combined to create something bigger. If we need to add something later we add another function or remove one if we need to reduce it. Arguably a more stable and easier to maintain approach.

// Pros and cons of each:
// FP --> perfomring many different operations for which the data is fixed. Stateless. Functions are pure --> can run on multiple processors. Declarative.
// OOP --> few operations performed on common data. Stateful. Side effects! Imperative.

// When should we use one over the other?
// FP --> good at processing large amounts of data for applications. e.g. machine learning
// OOP --> Many things with not many operations. E.g. characters in a game.

// React uses both! Use a tool when it is useful! In all programs there are two pirmary components, the data and the behaviors.
// OOP --> bring together the data and the behavior in an object or class
// FP --> data and behavior are distinctly different things and should be kept separate for clarity.