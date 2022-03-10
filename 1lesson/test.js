const user = { name : 'bob', age: 12}

const cloneUser = {...user} // поверхностое клонирование
const cloneUser2 = user

console.log(user === cloneUser) // false
console.log(user === cloneUser2) //true

const arr = [1,2,3,4,5,6]
const copyArr = [...arr]

console.log(arr === copyArr) //false

const complexUser = {
    name: 'bob',
    friends: ['saadas','dasdas','dsadas']
}
const deepCopyComplexUser  = {...complexUser, friends: [...complexUser.friends]} // глубокая копия
// глубоко купирование https://nuancesprog.ru/p/4443/ и лучше всего через лодаш метод .clonedeep
const copyComplexUser = {...complexUser}
console.log(copyComplexUser)