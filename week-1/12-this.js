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

this.name = "Human"
const greet = person.greet

greet()