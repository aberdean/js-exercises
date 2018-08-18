const p = document.querySelector('p');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const makeGreen = () => {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

p.addEventListener('click', makeGreen);

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am a %s string!', 'nice');
// ES6 (better!)
const attr = 'nice';
console.log(`Hello, I am a ${attr} string!`)

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; \
    text-shadow: 10px 10px 0 blue');

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Really bad!!!');

// Info
console.info('Did you know?');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
// uncomment to clear the console
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// uncomment to clear the console
// console.clear();

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  // If the group is large, it's useful to use the following
  // console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Bob');
console.count('Bob');
console.count('Bob');
console.count('Paul');
console.count('Paul');
console.count('Bob');
console.count('Bob');
console.count('Paul');
console.count('Paul');
console.count('Paul');
console.count('Bob');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/aberdean')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);
