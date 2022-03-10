let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const names = [];

for(let i = 0; i < students.length; i++) {
    //получение данных
    const name = students[i].name;
    names[i] = name
}

const trueStudents = []
for (let i = 0; i < students.length; i++) {
    const trueStudent = {...students[i], isStudent: true}
    trueStudents[i] = trueStudent
}
// создали свой map
function myMap (arr, callback) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        const newData = callback(arr[i])
            resultArray[i] = newData
    }
    return resultArray
}

console.log(myMap(students, s => s.name))
console.log(myMap(students, s => ({...s, isStudent: true})))

console.log(students.map(s => s.name))
console.log(students.map(s => ({...s, isStudent: true})))


function myFilter(arr, callback) {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i]) === true){
            resultArray[0] = arr[i]
        }
    }
    return resultArray
}

console.log(myFilter(students,s => s.scores > 90))

console.log(students.find(s=> s.name ==='Alex'))

function myFind(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            return arr[i]
        }
    }
}
console.log(students.find(s=> s.isMarried ===false))
console.log(myFind(students,s=> s.name === "Alex"))