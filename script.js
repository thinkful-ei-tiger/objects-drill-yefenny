// /* eslint-disable strict */

/**
 * 1.Object initializer and methods
 */
let loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.hydration());

/**
 * 2.Iterating over an object's properties
 */

let fiveObject = {
  foo: 'value1',
  bar: 'value 2',
  fum: 'value 3',
  quux: 'vaulue 4',
  spam: 'value 5'
};
for (let key in fiveObject) {
  console.log(key, fiveObject[key]);
}

/**
 * 3.Arrays in objects
 */
let food = {
  meals: [
    'breakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

console.log(food.meals[3]);

/**
 * 4.Arrays of objects
 * 5.Properties that aren't there
 */
let jobs = [
  { name: 'Madison', jobTitle: 'HealthCare', boss: 'Peter' },
  { name: 'Madison2', jobTitle: 'HealthCare2', boss: 'James' },
  { name: 'Madison3', jobTitle: 'HealthCare2', boss: 'Carlos' },
  { name: 'Madison4', jobTitle: 'HealthCare4', boss: 'Mark' },
  { name: 'Madison5', jobTitle: 'HealthCare5' }
];

for (let item of jobs) {
  if (item.boss)
    console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`);
  else console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`);
}

/**
 * 6.Cracking the code
 */
function decode(code) {
  let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };

  if (cipher.hasOwnProperty(code[0])) {
    index = cipher[code[0]] - 1;
    let decoded = code[index] ? code[index] : ' ';
    return `${decoded} `;
  } else {
    return ' ';
  }
}

// decode('cats');

function decodeWords(string) {
  let wordsArray = string.split(' ');
  let newString = '';
  for (let word of wordsArray) {
    newString += decode(word);
  }
  console.log(newString);
}

decodeWords('apple cycle apple cats');

/**
 * 7. Factory Functions with LOTR
 */

function createCharacter(
  name,
  nickname,
  race,
  origin,
  attack,
  defense,
  weapon
) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function () {
      return `${this.name} is a ${this.race} from ${this.origin} and he uses ${this.weapon}.`;
    },
    evaluateFight(character) {
      let x, y;
      this.attack < this.defense ? (x = 0) : (x = this.attack - this.defense);
      character.attack < character.defense
        ? (y = 0)
        : (y = character.attack - character.defense);
      return `${x} + ${y}`;
    }
  };
}
let gandalf = createCharacter(
  'Gandalf the White',
  'gandalf',
  'Wizard',
  'Middle Earth',
  10,
  6
);

let bilbo = createCharacter(
  'Bilbo Baggins',
  'bilbo',
  'Hobbit',
  'The Shire',
  2,
  1
);
let frodo = createCharacter(
  'Frodo Baggins',
  'frodo',
  'Hobbit',
  'The Shire',
  3,
  2
);

let aragorn = createCharacter(
  'Aragorn son of Arathorn',
  'aragorn',
  'Man',
  'Dunnedain',
  6,
  8
);

let legolas = createCharacter(
  'Legolas',
  'legolas',
  'Elf',
  'Woodland Realm',
  8,
  5
);

let characters = [gandalf, bilbo, frodo, aragorn, legolas];

console.log(gandalf.evaluateFight(gandalf));
characters.push(
  createCharacter(
    'Arwen Undomiel',
    'arwen',
    'half-elf',
    'Rivendell',
    9,
    10,
    'knife'
  )
);
console.log(characters);

let found = characters.find((character) => character.nickname === 'aragorn');

console.log(found.describe());

let hobbits = characters.filter((character) => character.race === 'Hobbit');

console.log(hobbits);

let highAttack = characters.filter((character) => character.attack > 5);
console.log(highAttack);

createCharacter.describe = function () {
  return `${this.name} is a ${this.race} from ${this.origin}.`;
};

/**
 * 8.BONUS: A Database Search
 */

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' }
];

function findOne(list, query) {
  let found = list.find((item) => {
    let newCondition = [];
    for (let x in query) {
      newCondition.push(`'${item[x]}' === '${query[x]}'`);
    }
    newCondition = newCondition.join(' && ');
    return eval(newCondition);
  });
  if (found) console.log(found);
  else console.log(null);
}

findOne(HEROES, { squad: 'Justice League' });

/**
 * BONUS II: A Database Method
 */
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' }
    ]
  },
  findOne: function (query) {
    let found = this.store.heroes.find((item) => {
      let newCondition = [];
      for (let x in query) {
        newCondition.push(`'${item[x]}' === '${query[x]}'`);
      }
      newCondition = newCondition.join(' && ');
      return eval(newCondition);
    });
    if (found) console.log(found);
    else console.log(null);
  }
};

Database.findOne({ id: 4 });
