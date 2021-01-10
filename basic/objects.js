const person = {
    firstName: 'Yubi',
    age: 31,
    hobbies: ['sports','coding'],
    greet() {
        console.log('Hi, i am '+this.firstName)
    }
}

console.log(person.firstName)
person.lastName = 'Khadka'
console.log(person)

delete person.age
console.log(person)


const greeting = person.greet.bind(person)

greeting()