let weight
//console.log(typeof weight)

let name = "Lameque Fernandes"
let age = 21
let stars = 4.8
let isSubscribed = true

let student = {
   name: "Lameque Fernandes",
   age: 21,
   weight: 70.2,
   isSubscribed: true
}

const mayra = {
   name: "mayra Fernandes",
   age: 17,
   weight: 70.2,
   isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

let students = []

students = [student]
   
console.log(students)

students = [student, mayra] // or students[1] = mayra

console.log(students[1])

