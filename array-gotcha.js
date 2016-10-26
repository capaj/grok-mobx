const {observable} = require('mobx')

const a = ['ab', 'cd']
const obsA = observable(a)

console.log(a === obsA)
console.log('Array.isArray(a)', Array.isArray(a))
console.log('Array.isArray(obsA)', Array.isArray(obsA))

Object.keys(obsA).forEach((key) => {
  console.log('iterating does work', key)  // not it DOES not
})
for (var key in obsA) {
  console.log('iterating does work', key)  // not it DOES not
}

obsA.forEach((item, key) => {
  console.log('array methods work', item, key)
})

console.log(obsA[3]) // a mobx warning out of bounds
obsA[5] = 1;  // throws an error

// Good thing is, all of these gotchas will be solved when all evergreen browsers have ES6 proxy
