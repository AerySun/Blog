console.log('test')
function test () {
  console.log('test')
}
test()

function multiply (a, b) {
  return a * b
}

console.log(multiply(12, 3))

// console.log(document.title)

const hello = 'test'
console.log(hello)

let world = 'wo'
world += 'rld'
console.log(world)

function fizzbuzz () {
  for (let n = 1; n <= 30; n++) { // n++ number + 1
    const isFizz = n % 3 === 0 //= == ist gleich   ./division
    const isBuzz = n % 5 === 0 //! == ungleich     .% restdivision
    const isFizzbuzz = isFizz && isBuzz
    if (isFizzbuzz) {
      console.log('fizzbuzz')
    } else if (isFizz) {
      console.log('fizz')
    } else if (isBuzz) {
      console.log('buzz')
    } else {
      console.log(n)
    }
  }
}
// fizzbuzz()

function biify (str) {
  const vowels = 'aeiou'.split('')
  // const vowels = [ 'a', 'e', 'i', 'o', 'u' ] <-array
  let output = ''
  for (const char of str) {
    output += char
    if (vowels.includes(char)) {
      output += 'bi'
    }
  }
  return output
}
console.log(biify('pfirsisch Anna'))

function biify2 (str) {
  let vowels = 'iaeou'
  vowels = vowels + vowels.toUpperCase()
  vowels = vowels.split('')
  for (const vowel of vowels) {
    str = str.replaceAll(vowel, vowel + 'bi')
  }
  return str
}
console.log(biify2('Elyas M Barek'))

function unbiify (str) {
  const vowels = 'aeiouAEIOU'.split('')
  // ITER(iteration=wiederholung) 1: const vowel = 'a'
  //         str = str.replaceAll('a' + 'bi', 'a')
  // ITER 2: const vowel = 'e'
  //         str = str.replaceAll('e' + 'bi', 'e')
  for (const vowel of vowels) {
    str = str.replaceAll(vowel + 'bi', vowel)
  }
  return str
}
console.log(unbiify(biify2('Elyas E Barek')))

// object    / alt+up or down =move up o down
const person = {
  name: 'Marco',
  age: 24,
  gender: 'M'
}
person.name = 'Stev'
console.log(`My name is ${person.name} and i am ${person.age} years old`)

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  sayName () {
    console.log(`Hello, my name is ${this.name} and im ${this.age} years young`)
  }
}
const marco = new Person('Marco', 24)
const neosh = new Person('Neosh', 2)
marco.sayName()
neosh.sayName()

function reversedbiify (str) {
  const vowels = 'iaeouAEIOU'.split('')
  for (const vowel of vowels) {
    str = str.replaceAll(vowel, 'bi' + vowel)
  }
  return str
}
console.log(reversedbiify('Marco, Yoshi, Neosh'))

// textarea counter, on max 50 /
const textarea = document.querySelector('textarea')
const count = document.getElementById('count')
const maxLength = 50
textarea.addEventListener('input', () => {
  const remaining = maxLength - textarea.value.length
  if (remaining < 0) {
    textarea.value = textarea.value.slice(0, maxLength)
  }
  count.textContent = `${textarea.value.length} / ${maxLength}`
})
