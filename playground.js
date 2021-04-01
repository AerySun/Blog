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
  for (let n = 1; n <= 30; n++) {
    const isFizz = n % 3 === 0
    const isBuzz = n % 5 === 0
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
console.log(biify('jannik welter Anna'))

function biify2 (str) {
  let vowels = 'iaeou'
  vowels = vowels + vowels.toUpperCase()
  vowels = vowels.split('')
  for (const vowel of vowels) {
    str = str.replace(vowel, vowel + 'bi')
  }
  return str
}
console.log(biify2('jasminnikWeltibir'))
