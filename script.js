// Task #1

let x = 10
let y = 7

let firstTask = (x > y) ? "x больше чем у" : "x не больше, чем у"
console.log(firstTask)

// Task #2

let num = +prompt("Введите число")

if (num % 2 === 0) {
    console.log("Число " + num + " четное")
} else if (num % 2 === 1) {
    console.log("Число " + num + " не четное")
} else {
    alert("Введите число")
}

// Task #3

let taskNumber = prompt("Введите целое число")

if (taskNumber % 1 === 0) {
    console.log("Число целое")
    console.log("В числе " + taskNumber + ", " + taskNumber.length + " цифр")
    if (taskNumber > 0) {
        console.log("Число " + taskNumber + " положительно")
    }   else if (taskNumber < 0 ) {
            console.log("Число " + taskNumber + " отрицательно")
    }   else if (taskNumber == 0 || taskNumber == -0) {
            console.log("Ноль есть ноль")
    }   else {
            console.log("Неккоректный ввод")
    }
}   else {
        alert("Некорректный ввод")
}

// Task #4

console.log(Math.max (+prompt("ВВедите первое число"),+prompt("ВВедите второе число"),+prompt("ВВедите третье число")))

// Task #5

let firstSide = +prompt ("Введите длину первой стороны")
let secondSide = +prompt ("Введите длину второй стороны")
let thirdSide = +prompt ("Введите длину третьей стороны")

if ((firstSide + secondSide) > thirdSide && (firstSide + thirdSide) > secondSide && (secondSide + thirdSide) > firstSide) {
    console.log("Такой треугольник существует")
}   else {
    console.log("Такого трегольника не существует")
}
