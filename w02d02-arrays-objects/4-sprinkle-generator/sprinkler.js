const coffeeSprinkles = [
  'nutmeg',
  'chocolate',
  'coconut',
  'pineapple cinnamon',
  'saw dust'
];

// function sprinkler(array){
//  return 'Some random item';
// }

// Randomly return an item
const getRandomArrayItem = function(array) {
  // Create random index
  // https://gist.github.com/acidtone/2a3cac26a229aa95685e5cf6344f2e4e
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

console.log(sprinkler(coffeeSprinkles));
