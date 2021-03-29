const coffeeSprinkles = [
  {
    label: 'nutmeg',
    cost: 0.50
  },
  {
    label: 'chocolate',
    cost: 1
  },
  {
    label: 'coconut',
    cost: 2
  },
  {
    label: 'pineapple cinnamon',
    cost: 3
  },
  {
    label: 'saw dust',
    cost: 4
  }
];

// function sprinkler(array){
//  return 'Some random item';
// }

// Randomly return an item
const fancySprinkler = function(array) {
  // Create random index
  // https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

const randomSprinkle = fancySprinkler(coffeeSprinkles);
console.log(`Added ${randomSprinkle.name} at an extra cost of $${randomSprinkle.cost.toFixed(2)}`);

console.log(randomSprinkle);
console.log(JSON.stringify(randomSprinkle, null, 2));