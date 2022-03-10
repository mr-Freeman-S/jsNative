const names = ['Bob', "Alex", "Ted", "Fred", "bob", 100]

//console.log(names.sort())

const numbers = [1, 100, 0, 999, 33, 543]

// console.log([...numbers].sort((a, b) => a - b))

function compareFunc(a, b) { // по возрастанию
    if (a <= b) {
        return -1 // отрицательное значение, если менять не надо
    } else {
        return 1 // положительное значение, если менять надо
    }
}

// bubble sort
console.log(numbers)
for (let j = 0; j <numbers.length - 1; j++) {
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            let temp = numbers[i + 1]
            numbers[i + 1] = numbers[i]
            numbers[i] = temp
        }
    }
}
console.log(numbers)