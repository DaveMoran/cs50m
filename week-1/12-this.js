const person = {
  name: 'David',
  greet: function() {  console.log( "Hello,", this.name) }
}

person.greet()

const friend = {
  name: "Maite"
}

friend.greet = person.greet

friend.greet()

const greet = person.greet.bind({name: "Bound"})
person.greet.call({ name: "Bound" })
person.greet.apply({ name: "Bound" })

const newPerson = {
  name: 'newPerson',
  greet: () => { console.log(this.name) }
}

newPerson.greet()

greet()