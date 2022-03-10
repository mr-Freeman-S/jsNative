const students = [
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
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
// console.log(user===copyUser)//- что должно быть в консоли? false
// console.log(user.friends===copyUser.friends)//- что должно быть в консоли? true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = JSON.parse(JSON.stringify(user));
//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли? false
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли? false

//3. Поверхностная копия массива students
let copyStudents = [...students];
//Проверка:
// console.log(copyStudents === students ) - что должно быть в консоли? false
// console.log(copyStudents[0].name === students[0].name)  - что должно быть в консоли? true

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => {
    return {...el}
})

//Проверка:
// console.log(deepCopyStudents === students ) - что должно быть в консоли? false
// console.log(deepCopyStudents[0] === students[0]) - что должно быть в консоли? false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((el, elNext) => el.name < elNext.name ? 1 : -1);
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(el => el.scores >= 100 && el);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [ ...topStudents,...deepCopyStudents];
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(el => (!el.isMarried) && el);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(el => el.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(el => {
    return {...el, isStudent: true}
});
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(el => el.name === "Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
//let bestStudent = newDeepCopyStudents.reduce((acc, cur) => cur.scores >= acc.scores ? cur : acc)
/*let bestStudent;
for (let i = 0; i < newDeepCopyStudents.length - 1; i++) {
    if (newDeepCopyStudents[i].scores >= newDeepCopyStudents[i + 1].scores) {
        bestStudent = newDeepCopyStudents[i]
    } else bestStudent = newDeepCopyStudents[i + 1]
}*/
let bestStudent1;
let counter = 0
for (let i = 0; i < students.length - 1; i++) {
    if (students[i].scores > counter) {
        counter = students[i].scores
        bestStudent1 = students[i]
    }
}

console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = newDeepCopyStudents.reduce((a, b) => a + b.scores, 0)
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    return students.map(e => {
        return {...e, friends: students.filter(el => el.name !== e.name && el.name)}
    })
}
console.log(addFriends(students));









