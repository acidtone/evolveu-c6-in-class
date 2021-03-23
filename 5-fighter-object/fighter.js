const fighter = {
  name: "Gus",
  strength: 8,
  intelligence: 3,
  money: null,
  equipment: ['sword', 'shield', 'teddy bear'],
  greet: function(){
    return `My name is ${this.name}. Prepare to hug!`
  }
};

// Access properties
const characterName = fighter.name;

console.log(characterName);

const characterWealth = fighter.money;

console.log(characterWealth);

// Assign properties
fighter.money = 'lots';
console.log(fighter.money);

// Add new property
fighter.weaknesses = ['peanuts','witty banter'];
console.log(fighter.weaknesses);

// Modifying a property array
console.log(fighter.equipment);
fighter.equipment.push('Cursed Peanut of Akronis');

console.log(fighter.equipment.join('; '));
