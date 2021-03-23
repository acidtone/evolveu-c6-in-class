const coffeeSprinkles = [
  'nutmeg',
  'chocolate',
  'saw dust'
];

console.log(coffeeSprinkles);

// Length
console.log(`Length: ${coffeeSprinkles.length}!`); //ES6
console.log('Length: ' + coffeeSprinkles.length + '!'); //ES5

// Access item by index
console.log(`second item: ${coffeeSprinkles[1]}`);

console.log(`first item: ${coffeeSprinkles[0]}`);

console.log(`last item: ${coffeeSprinkles[2]}`);

console.log(`last item: ${coffeeSprinkles[coffeeSprinkles.length - 1]}`);

// Assign values
coffeeSprinkles[2] = 'coconut flakes';

console.log(coffeeSprinkles);

// Add new values
coffeeSprinkles[3] = `pineapple cinnamon`;

console.log(coffeeSprinkles);

console.log(`new last item: ${coffeeSprinkles[coffeeSprinkles.length - 1]}`);

console.log(`Index of coconut flakes: ${coffeeSprinkles.indexOf('coconut flakes')}`);

console.log(`Joining with glue: ${coffeeSprinkles.join('; ')}`);