const {observable, autorun} = require('mobx')

const state = {
  firstName: 'Michael',
  lastName: 'Westraste',
  nick: null
}

const obs = observable(state)
console.log(state)
console.log('state === obs', state === obs)

// this is done for you by mobx-react observer
const disposer = autorun(() => {
  console.log('firstName + lastName', state.firstName + ' ' + state.lastName)
})

state.firstName = 'Jiri'
state.lastName = 'Spac'
disposer() // this is also done for you by mobx-react observer
state.firstName = "doesn't trigger"
state.lastName = 'anything anymore'
