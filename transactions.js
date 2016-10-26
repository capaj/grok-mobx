const {observable, autorun, transaction} = require('mobx')

const state = {
  firstName: 'Michael',
  lastName: 'Westraste'
}

const obs = observable(state)
let c = 0
autorun(() => {
  c++
  console.log(`run ${c}`)
  console.log(`firstName + lastName`, state.firstName + ' ' + state.lastName)
})

transaction(() => {
  state.firstName = 'Jiri'  // triggers
  state.lastName = 'Spac'  // triggers
})
