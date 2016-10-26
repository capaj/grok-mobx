const {observable} = require('mobx')

const state = observable({
  firstName: 'Michael',
  lastName: 'Westraste'
})

// created by mobx somewhere in the background
let backingFields = {
  firstName: 'Michael',
  lastName: 'Westraste'
}
// what actually state is now:

const stateIsNow = {
  get firstName() {
    // mobx makes a note that this was accessed-if we're in autorun block, this field is subscribed
    return backingFields.firstName
  },
  set firstName(value) {
    // mobx notifies subscribers on this value
    return backingFields.firstName = value
  },
  get lastName() {
    // mobx makes a note that this was accessed-if we're in autorun block, this field is subscribed
    return backingFields.lastName
  },
  set lastName(value) {
    // mobx notifies subscribers on this value
    return backingFields.lastName = value
  }
}
