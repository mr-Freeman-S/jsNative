const todoListID_1 = '53jf-65hg'
const todoListID_2 = 's3a12das1jf-65hg'


const todoList = [
    {
        id: [todoListID_1],
        title: 'What learn',
        filter: "all",
        task: []
    },
    {
        id: [todoListID_2],
        title: 'What we buy',
        filter: "all",
        task: []
    }
]

const tasks = {
    [todoListID_1]: [ //'53jf-65hg'
        {title: 'HTML', isDone: true},
        {title: 'CSS', isDone: true},
        {title: 'JS', isDone: true},
        {title: 'React', isDone: true},
    ],
    [todoListID_2]: [ //'s3a12das1jf-65hg'
        {title: 'Bread', isDone: true},
        {title: 'Milk', isDone: true},
        {title: 'Monitor', isDone: false}
    ]
}

//reduce
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

const arr = [1, 3, 4, 5, 34, 3, 2, 1]

/*console.log(arr.reduce((sum, el) => sum + el, 0))
console.log(arr.reduce((max, el) => max > el ? max : el))*/

console.log(students.reduce((acc, st) => acc + st.scores, 0))
console.log(students.reduce((acc, el) => `${acc} ${el.name}`, ''))

console.log(students.reduce((acc, st) => {
    if (!st.isMarried) {
        acc.push(st)
    }
    return acc
}, []))

console.log(students.reduce((newOjc, el) => {
        newOjc[el.name] = el.scores
        return newOjc
    },
    {}
))

