const {observable, autorun} = require('mobx')

const state = {
  firstName: 'Michael',
  lastName: 'Westraste',
  nick: null
}

const obs = observable(state)
let c = 0
autorun(() => {
  c++
  console.log(`run ${c}`)
  console.log(`firstName + lastName`, state.firstName + ' ' + state.lastName)
  if (state.lastName !== 'Westraste') {
    console.log(state.nick)
  }
})

state.firstName = 'Jiri'  // triggers
state.nick = 'Capaj'  // doesn't trigger
state.lastName = 'Spac'  // triggers
state.nick = 'Capaj2'  // does trigger

// console.log('Array.isArray(a)', Array.isArray(a))
// console.log('Array.isArray(obsA)', Array.isArray(obsA))
