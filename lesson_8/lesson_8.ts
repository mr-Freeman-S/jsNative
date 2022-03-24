// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    let answer = nums.reduce((acc, el) => acc + el, 0)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return answer
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if ((a + b) < c || (c + b) < a || (c + a) < b) {
        return "00"
    } else if (a == b && b == c) {
        return "10"
    } else if (a == b || b == c || c == a) {
        return "01"
    } else return "11"
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let answer = 0
    let str = String(number)
    for (let i = 0; i < str.length; i++) {
        answer += +str[i]
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return answer
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0
    let odd = 0
    /*for (let i = 0; i < arr.length; i = i+2) {
        even += arr[i]
    }
    for (let i = 1; i < arr.length; i = i+2) {
        odd += arr[i]
    }*/
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            even += arr[i]
        } else odd += arr[i]
    }
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return (even > odd)
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(el => el == Math.floor(el) && el > 0).map(el => el ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    debugger
    return N === 0 ? 0 : N + sumFirstNumbers(N - 1)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let answer = []
    let count = 0
    while (amountOfMoney > 0) {
        if (amountOfMoney >= banknotes[count]) {
            amountOfMoney -= banknotes[count]
            answer.push(banknotes[count])
        } else count++
    }
    return answer
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}