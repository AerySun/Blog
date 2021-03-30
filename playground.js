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
fizzbuzz()
